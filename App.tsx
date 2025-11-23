import React, { useState } from 'react';
import { Dices, BookOpen, Lightbulb, PenTool, RotateCw, X, Newspaper } from 'lucide-react';
import { PHRASE_STARTS, PHRASE_ENDS, REFERENCE_DATA, EXAMPLES } from './constants';
import { PromptCombination, ReferenceItem, ExampleStory, PhrasePart } from './types';
import ReferenceCard from './components/ReferenceCard';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<PromptCombination | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [relevantRefs, setRelevantRefs] = useState<ReferenceItem[]>([]);
  const [showAllRefs, setShowAllRefs] = useState(false);
  const [showExampleModal, setShowExampleModal] = useState(false);
  const [currentExample, setCurrentExample] = useState<ExampleStory | null>(null);

  const rollDice = () => {
    setIsRolling(true);
    setPrompt(null); 
    
    setTimeout(() => {
      // 1. Pick a Random Start
      const randomStart = PHRASE_STARTS[Math.floor(Math.random() * PHRASE_STARTS.length)];
      
      // 2. Filter Valid Ends based on allowedCategories
      const allowedCategories = randomStart.allowedCategories || [];
      const validEnds = PHRASE_ENDS.filter(end => 
        end.category && allowedCategories.includes(end.category)
      );

      // Fallback if no compatibility found (shouldn't happen if config is good)
      const randomEnd = validEnds.length > 0 
        ? validEnds[Math.floor(Math.random() * validEnds.length)]
        : PHRASE_ENDS[Math.floor(Math.random() * PHRASE_ENDS.length)];
      
      const newPrompt: PromptCombination = {
        start: randomStart,
        end: randomEnd,
        imgSeed: Math.floor(Math.random() * 1000)
      };
      
      setPrompt(newPrompt);
      filterReferences(newPrompt);
      setIsRolling(false);
    }, 1000);
  };

  const filterReferences = (currentPrompt: PromptCombination) => {
    const combinedTags = [...currentPrompt.start.tags, ...currentPrompt.end.tags];
    
    const filtered = REFERENCE_DATA.filter(ref => {
      if (ref.id === 'u10-irregular-preterite' || ref.id === 'u10-pret-imp') return true;
      return ref.tags.some(tag => combinedTags.includes(tag));
    });

    setRelevantRefs(filtered);
  };

  const openExample = () => {
    const randomExample = EXAMPLES[Math.floor(Math.random() * EXAMPLES.length)];
    setCurrentExample(randomExample);
    setShowExampleModal(true);
  };

  // Helper to generate a random image URL based on keywords
  const getImageUrl = (tags: string[], seed: number) => {
    const keyword = tags.includes('history') ? 'history' 
                  : tags.includes('space') ? 'space' 
                  : tags.includes('health') ? 'doctor'
                  : tags.includes('crime') ? 'police'
                  : 'newspaper';
    return `https://source.unsplash.com/300x200/?${keyword}&sig=${seed}`;
  };

  // Fallback unsplash image logic since direct source is deprecated often, using a placeholder service or just colors
  // Actually, let's use a simple placeholder logic or reliable random images if possible. 
  // Since unsplash source is unreliable recently, let's use a nice pattern or gradient for now, or picsum.
  const getPlaceholderImage = (seed: number = 0) => `https://picsum.photos/seed/${seed}/400/300`;

  return (
    <div className="min-h-screen bg-paper font-sans pb-12 border-t-8 border-slate-800">
      
      {/* Header */}
      <header className="bg-slate-900 text-paper p-6 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-display tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400 drop-shadow-sm rotate-[-2deg]">
              EL DIARIO LOCO
            </h1>
            <p className="text-slate-400 mt-2 font-news italic text-lg">
              "Donde la gramática cobra vida y pierde el sentido"
            </p>
          </div>
          <button 
            onClick={openExample}
            className="group flex items-center gap-2 bg-paper text-slate-900 px-6 py-3 rounded-sm font-bold shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)] transition-all border-2 border-slate-700"
          >
            <Lightbulb size={20} className="text-yellow-600 group-hover:animate-pulse" />
            Ver Ejemplo
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Interaction Area */}
        <section className="lg:col-span-5 flex flex-col gap-8">
          
          {/* Control Panel */}
          <div className="bg-white p-6 rounded-sm border-2 border-slate-200 shadow-md">
            <div className="text-center mb-6">
              <p className="font-display text-2xl text-slate-700 mb-4">
                ¿Qué está pasando hoy?
              </p>
              <button
                onClick={rollDice}
                disabled={isRolling}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-news font-black text-2xl py-4 px-8 rounded-sm shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transform transition active:translate-y-[5px] active:shadow-none disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none flex items-center justify-center gap-3 border-2 border-black"
              >
                {isRolling ? 'Imprimiendo...' : 'GENERAR TITULAR'}
                <Dices size={28} className={isRolling ? 'animate-spin' : ''} />
              </button>
            </div>

            {/* Instructions */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-yellow-900">
              <h3 className="font-bold flex items-center gap-2 mb-1 font-news text-lg">
                <PenTool size={16} /> Instrucciones:
              </h3>
              <p>Escribe la noticia completa del suceso. Recuerda usar:</p>
              <ul className="list-disc pl-4 mt-1 space-y-1 opacity-80">
                <li><strong>Pretérito</strong> para acciones (qué pasó).</li>
                <li><strong>Imperfecto</strong> para descripciones (cómo era).</li>
                <li>Conectores temporales.</li>
              </ul>
            </div>
          </div>

          {/* The Newspaper Result */}
          <div className="relative min-h-[300px]">
            {prompt ? (
               <div className="animate-print origin-center bg-[#fdfbf7] text-slate-900 p-6 border border-slate-300 newspaper-shadow max-w-md mx-auto rotate-1">
                  {/* Newspaper Header */}
                  <div className="border-b-2 border-black pb-2 mb-4 flex justify-between items-end">
                    <span className="font-display text-xl tracking-widest">NOTICIAS DE ÚLTIMA HORA</span>
                    <span className="font-news text-xs italic">Vol. 10 - Edición Especial</span>
                  </div>

                  {/* Content Grid */}
                  <div className="flex flex-col gap-4">
                    {/* Headline */}
                    <div>
                      <h2 className="font-news font-black text-3xl md:text-4xl leading-tight mb-2">
                        {prompt.start.text} <span className="text-red-700">{prompt.end.text}</span>
                      </h2>
                      <div className="h-1 w-20 bg-black mb-4"></div>
                    </div>

                    {/* Image & Caption */}
                    <div className="flex gap-4">
                        <div className="w-1/2 shrink-0">
                            <img 
                                src={getPlaceholderImage(prompt.imgSeed)} 
                                alt="News" 
                                className="w-full h-auto grayscale contrast-125 border border-black p-1 bg-white"
                            />
                            <p className="text-[10px] text-slate-500 mt-1 text-center font-mono">Fig A. Imagen de archivo</p>
                        </div>
                        <div className="w-1/2 text-[10px] font-serif text-justify text-slate-600 leading-tight">
                            <p className="first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-1 first-letter:mt-[-2px]">
                                Fuentes fidedignas confirman el suceso ocurrido esta mañana. 
                                Los testigos afirman no haber visto nada igual en la historia reciente.
                                <br/><br/>
                                <strong>"Es increíble"</strong>, declaró un vecino.
                            </p>
                        </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="border-t-2 border-black mt-4 pt-1 text-center">
                    <p className="text-[10px] uppercase font-bold tracking-widest">Lea la historia completa en pág. 5</p>
                  </div>
               </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-slate-400 border-2 border-dashed border-slate-300 rounded-lg bg-white/50">
                <Newspaper size={48} className="mb-2 opacity-50" />
                <p className="font-news italic text-lg">Esperando noticias...</p>
              </div>
            )}
          </div>
        </section>

        {/* RIGHT COLUMN: Reference Material */}
        <section className="lg:col-span-7 bg-white p-6 border border-slate-200 shadow-sm h-fit rounded-sm">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-100">
            <h2 className="text-2xl font-news font-bold text-slate-800 flex items-center gap-2">
              <BookOpen className="text-red-600" />
              Archivo y Vocabulario
            </h2>
            <button 
              onClick={() => setShowAllRefs(!showAllRefs)}
              className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors border border-slate-300 px-3 py-1 rounded-full"
            >
              {showAllRefs ? 'Ver Recomendados' : 'Ver Todo'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {showAllRefs ? (
              REFERENCE_DATA.map(item => <ReferenceCard key={item.id} item={item} />)
            ) : (
              prompt ? (
                relevantRefs.length > 0 ? (
                  relevantRefs.map(item => <ReferenceCard key={item.id} item={item} />)
                ) : (
                  <div className="col-span-2 text-center py-12">
                    <p className="text-slate-500 font-serif">No hay referencias específicas para esta combinación.</p>
                  </div>
                )
              ) : (
                // Default view: Unit 10 basics
                REFERENCE_DATA.filter(r => r.unit === '10').map(item => <ReferenceCard key={item.id} item={item} />)
              )
            )}
          </div>
        </section>

      </main>

      {/* Example Modal */}
      {showExampleModal && currentExample && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-paper max-w-lg w-full shadow-[10px_10px_0px_0px_rgba(0,0,0,0.5)] border-2 border-black overflow-hidden animate-print">
            <div className="bg-slate-900 p-4 flex justify-between items-center text-white border-b-2 border-black">
              <h3 className="font-display text-xl tracking-wide">EJEMPLO DE NOTICIA</h3>
              <button onClick={() => setShowExampleModal(false)} className="hover:text-red-400 transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="p-8">
              <div className="border-b-4 border-black mb-4 pb-2">
                <p className="font-news font-black text-2xl text-slate-900 leading-tight">
                  "{currentExample.headline}"
                </p>
              </div>
              <div className="font-serif text-slate-800 mb-6 text-justify leading-relaxed">
                <p>{currentExample.story}</p>
              </div>
              <div className="bg-yellow-100 p-3 border border-yellow-300 text-xs text-yellow-900 flex items-start gap-2 rounded-sm">
                <Lightbulb size={16} className="shrink-0 mt-0.5" />
                <span><strong>Foco Gramatical:</strong> {currentExample.grammarFocus}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Footer */}
      <footer className="text-center text-slate-400 text-xs py-8 font-mono">
        <p>Diseñado para practicar español. Unidades 8, 9 y 10.</p>
      </footer>
    </div>
  );
};

export default App;