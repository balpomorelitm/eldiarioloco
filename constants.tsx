import React from 'react';
import { PhrasePart, ReferenceItem, ExampleStory } from './types';
import { Activity, Clock, HeartPulse, History, Smile, AlertTriangle, User } from 'lucide-react';

// --- PHRASES ---

export const PHRASE_STARTS: PhrasePart[] = [
  // --- UNIT 10: PAST TENSES (CRIME/ACTIONS) ---
  { 
    id: 's1', 
    text: 'Detienen por robo en una joyería a...', 
    tags: ['crime', 'past'], 
    allowedCategories: ['person', 'animal'] // Can't detain an abstract concept
  },
  { 
    id: 's2', 
    text: 'Pagan 1000 euros por cenar con...', 
    tags: ['society', 'money'], 
    allowedCategories: ['person'] 
  },
  { 
    id: 's3', 
    text: 'Llega a la base espacial...', 
    tags: ['space', 'past'], 
    allowedCategories: ['person', 'object', 'animal', 'food'] // Can't receive "rights"
  },
  { 
    id: 's4', 
    text: 'Vuelve a las pantallas...', 
    tags: ['media', 'present'], 
    allowedCategories: ['person', 'animal'] 
  },
  { 
    id: 's5', 
    text: 'Cae al río Ebro...', 
    tags: ['accident', 'past'], 
    allowedCategories: ['person', 'object', 'animal'] 
  },
  { 
    id: 's6', 
    text: 'Un perro muerde a...', 
    tags: ['accident', 'animals'], 
    allowedCategories: ['person'] // Dog bites person. Dog biting "penicillin" is weird.
  },

  // --- UNIT 9: HISTORY / IMPERFECT ---
  // Replaced "En la época romana..." with headline style
  { 
    id: 's7', 
    text: 'Arqueólogos descubren textos secretos sobre...', 
    tags: ['history', 'imperfect'], 
    allowedCategories: ['person', 'abstract', 'object'] 
  },
  { 
    id: 's8', 
    text: 'Expertos confirman que en 1920 la gente amaba a...', 
    tags: ['history', 'imperfect'], 
    allowedCategories: ['person', 'food', 'object'] 
  },
  { 
    id: 's9', 
    text: 'Sale a la luz el diario de mi abuela sobre...', 
    tags: ['life-stages', 'imperfect'], 
    allowedCategories: ['person', 'abstract', 'object'] 
  },
  { 
    id: 's10', 
    text: 'Escándalo: Durante la dictadura prohibieron...', 
    tags: ['politics', 'past'], 
    allowedCategories: ['abstract', 'object', 'food'] 
  },

  // --- UNIT 8: HEALTH / BODY / IMPERATIVE ---
  // Changed personal phrases to Headlines
  { 
    id: 's11', 
    text: 'Nueva recomendación médica: ¡Eviten a toda costa a...!', 
    tags: ['health', 'imperative'], 
    allowedCategories: ['person', 'animal', 'food'] 
  },
  { 
    id: 's12', 
    text: 'Estudio científico: Para adelgazar es necesario evitar...', 
    tags: ['health', 'advice'], 
    allowedCategories: ['food', 'object', 'person'] 
  },
  { 
    id: 's13', 
    text: 'Alerta Sanitaria: Graves dolores de cabeza causados por...', 
    tags: ['body', 'doler'], 
    allowedCategories: ['object', 'abstract', 'person', 'food'] 
  },
  { 
    id: 's14', 
    text: 'El paciente se sentía fatal por culpa de...', 
    tags: ['health', 'emotions'], 
    allowedCategories: ['person', 'object', 'food'] 
  },
  { 
    id: 's15', 
    text: 'Manual de Seguridad: ¡No toques nunca a...!', 
    tags: ['imperative', 'warning'], 
    allowedCategories: ['person', 'animal', 'object'] 
  },
];

export const PHRASE_ENDS: PhrasePart[] = [
  // --- PEOPLE (Category: person) ---
  { id: 'e1', text: 'un agricultor que duerme la siesta.', tags: ['person', 'action'], category: 'person' },
  { id: 'e2', text: 'el presidente del Gobierno español.', tags: ['politics', 'person'], category: 'person' },
  { id: 'e3', text: 'Batman.', tags: ['fiction', 'hero'], category: 'person' },
  { id: 'e4', text: 'la princesa Tania de Fastundia.', tags: ['royalty', 'fiction'], category: 'person' },
  { id: 'e5', text: 'un joven atrapado en su coche.', tags: ['person', 'transport'], category: 'person' },
  { id: 'e6', text: 'la primera astronauta española.', tags: ['science', 'person'], category: 'person' },
  { id: 'e7', text: 'un gladiador romano muy enfadado.', tags: ['history', 'emotions'], category: 'person' },
  { id: 'e9', text: 'un rey que perdió su trono.', tags: ['history', 'politics'], category: 'person' },
  { id: 'e13', text: 'el vecino ruidoso del quinto.', tags: ['society', 'person'], category: 'person' },

  // --- OBJECTS / BODY (Category: object) ---
  // Changed "mi rodilla" to "la rodilla de Messi"
  { id: 'e11', text: 'la rodilla izquierda de Leo Messi.', tags: ['body', 'health'], category: 'object' },
  { id: 'e15', text: 'un satélite soviético perdido.', tags: ['space', 'history'], category: 'object' },
  { id: 'e16', text: 'una estatua de oro robada.', tags: ['crime', 'history'], category: 'object' },

  // --- ABSTRACT / EVENTS (Category: abstract) ---
  { id: 'e8', text: 'la invención de la penicilina.', tags: ['history', 'science'], category: 'abstract' },
  { id: 'e10', text: 'los derechos de los estudiantes.', tags: ['society', 'rights'], category: 'abstract' },
  { id: 'e12', text: 'un virus contagioso pero divertido.', tags: ['health', 'illness'], category: 'abstract' }, // Acts like object/abstract

  // --- FOOD / ANIMALS ---
  { id: 'e14', text: 'una dieta basada solo en chocolate.', tags: ['health', 'food'], category: 'food' },
  { id: 'e17', text: 'una paella gigante.', tags: ['food', 'culture'], category: 'food' },
  { id: 'e18', text: 'un gato que habla latín.', tags: ['animals', 'history'], category: 'animal' },
];

// --- REFERENCE MATERIAL ---

export const REFERENCE_DATA: ReferenceItem[] = [
  // UNIT 10 (GREY)
  {
    id: 'u10-irregular-preterite',
    title: 'Pretérito Indefinido: Irregulares',
    category: 'grammar',
    unit: '10',
    tags: ['past', 'irregular', 'grammar'],
    content: (
      <div className="space-y-4 text-sm">
        <p className="italic text-gray-600">Cambios de vocal (e → i, o → u) en 3ª persona.</p>
        <div className="grid grid-cols-3 gap-2 font-mono text-xs">
          <div className="bg-gray-100 p-2 rounded">
            <strong className="block text-center text-gray-700 mb-1">PEDIR</strong>
            <div>pedí</div>
            <div>pediste</div>
            <div className="text-red-600 font-bold">pidió</div>
            <div>pedimos</div>
            <div>pedisteis</div>
            <div className="text-red-600 font-bold">pidieron</div>
          </div>
          <div className="bg-gray-100 p-2 rounded">
            <strong className="block text-center text-gray-700 mb-1">SENTIR</strong>
            <div>sentí</div>
            <div>sentiste</div>
            <div className="text-red-600 font-bold">sintió</div>
            <div>sentimos</div>
            <div>sentisteis</div>
            <div className="text-red-600 font-bold">sintieron</div>
          </div>
           <div className="bg-gray-100 p-2 rounded">
            <strong className="block text-center text-gray-700 mb-1">DORMIR</strong>
            <div>dormí</div>
            <div>dormiste</div>
            <div className="text-red-600 font-bold">durmió</div>
            <div>dormimos</div>
            <div>dormisteis</div>
            <div className="text-red-600 font-bold">durmieron</div>
          </div>
        </div>
        <div className="bg-orange-50 p-2 rounded border border-orange-200 mt-2">
          <strong className="block text-orange-800 mb-1">Raíces Irregulares (Terminaciones: -e, -iste, -o, -imos, -isteis, -ieron)</strong>
          <ul className="grid grid-cols-2 gap-1 text-xs">
            <li>Estar → <strong>estuv-</strong></li>
            <li>Tener → <strong>tuv-</strong></li>
            <li>Poner → <strong>pus-</strong></li>
            <li>Poder → <strong>pud-</strong></li>
            <li>Saber → <strong>sup-</strong></li>
            <li>Hacer → <strong>hic/z-</strong></li>
            <li>Venir → <strong>vin-</strong></li>
            <li>Decir → <strong>dij-</strong> (eron)</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'u10-pret-imp',
    title: 'Pretérito vs Imperfecto',
    category: 'grammar',
    unit: '10',
    tags: ['past', 'storytelling', 'grammar'],
    content: (
      <div className="space-y-2 text-sm">
        <div className="flex items-start gap-2 bg-blue-50 p-2 rounded">
          <History className="w-5 h-5 text-blue-500 mt-1" />
          <div>
            <strong className="text-blue-700">Pretérito (Indefinido)</strong>
            <p>Avanza la historia. Acciones completas.</p>
            <p className="text-xs italic text-gray-500">"Visitó Madrid en 1988."</p>
          </div>
        </div>
        <div className="flex items-start gap-2 bg-purple-50 p-2 rounded">
          <Clock className="w-5 h-5 text-purple-500 mt-1" />
          <div>
            <strong className="text-purple-700">Imperfecto</strong>
            <p>Describe las circunstancias. La historia se detiene.</p>
            <p className="text-xs italic text-gray-500">"Era verano y hacía calor."</p>
          </div>
        </div>
        <div className="mt-2 border-t pt-2">
            <strong>Marcadores temporales:</strong>
            <ul className="list-disc pl-4 text-xs text-gray-700">
                <li><span className="font-bold">Acción (Pret):</span> Una vez, un día, de repente, luego.</li>
                <li><span className="font-bold">Descripción (Imp):</span> Mientras, en ese momento.</li>
            </ul>
        </div>
      </div>
    )
  },
  {
    id: 'u10-emotions',
    title: 'Expresar Emociones',
    category: 'vocabulary',
    unit: '10',
    tags: ['emotions', 'vocabulary'],
    content: (
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
            <strong className="block text-gray-700 border-b mb-1">Verbos</strong>
            <ul className="text-gray-600">
                <li>Recordar / Un recuerdo</li>
                <li>Llorar vs Reír</li>
                <li>Enfadarse vs Emocionarse</li>
                <li>Ponerse (nervioso/triste/rojo)</li>
                <li>Sentir (miedo/vergüenza)</li>
            </ul>
        </div>
        <div>
            <strong className="block text-gray-700 border-b mb-1">Reacciones</strong>
            <ul className="text-gray-600 text-xs">
                <li>"¡Qué emoción!"</li>
                <li>"¡Qué vergüenza!"</li>
                <li>"¡Qué miedo!"</li>
                <li>"¡Qué bien/alegría!"</li>
                <li>"¡Qué pena!"</li>
            </ul>
        </div>
      </div>
    )
  },

  // UNIT 9 (LILAC/PINK)
  {
    id: 'u9-history',
    title: 'Historia y Sociedad',
    category: 'vocabulary',
    unit: '9',
    tags: ['history', 'politics', 'vocabulary'],
    content: (
      <div className="space-y-2 text-sm">
        <div className="grid grid-cols-2 gap-2">
            <div className="bg-pink-50 p-2 rounded">
                <strong>Gobierno</strong>
                <ul className="list-disc pl-3 text-xs">
                    <li>La democracia</li>
                    <li>La dictadura</li>
                    <li>La república</li>
                    <li>La monarquía</li>
                </ul>
            </div>
            <div className="bg-pink-50 p-2 rounded">
                <strong>Derechos</strong>
                <ul className="list-disc pl-3 text-xs">
                    <li>Libertad de expresión</li>
                    <li>El voto / El divorcio</li>
                    <li>Igualdad de género</li>
                </ul>
            </div>
        </div>
        <div className="border-t pt-1">
            <strong>Hitos:</strong> <span className="text-xs text-gray-600">La invención de (la rueda, internet), El descubrimiento de (fuego, América).</span>
        </div>
      </div>
    )
  },
  {
    id: 'u9-time',
    title: 'Marcadores de Tiempo (Imperfecto)',
    category: 'grammar',
    unit: '9',
    tags: ['time', 'imperfect', 'grammar'],
    content: (
      <ul className="grid grid-cols-2 gap-2 text-sm">
          <li className="bg-gray-50 p-1 rounded">A principios del siglo XX</li>
          <li className="bg-gray-50 p-1 rounded">A mediados de los 50</li>
          <li className="bg-gray-50 p-1 rounded">A finales de los 90</li>
          <li className="bg-gray-50 p-1 rounded">En la década de los 20</li>
          <li className="bg-gray-50 p-1 rounded">En aquella época...</li>
          <li className="bg-gray-50 p-1 rounded">En aquellos tiempos...</li>
          <li className="bg-yellow-50 p-1 rounded font-bold">Hoy en día / Actualmente</li>
      </ul>
    )
  },

  // UNIT 8 (BLUE)
  {
    id: 'u8-body',
    title: 'El Cuerpo y Salud',
    category: 'vocabulary',
    unit: '8',
    tags: ['body', 'health', 'vocabulary'],
    content: (
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div>
            <strong className="text-blue-700">Partes</strong>
            <ul className="text-xs text-gray-600 list-disc pl-3">
                <li>La cabeza / La cara</li>
                <li>El cuello / El pecho</li>
                <li>El brazo / El codo</li>
                <li>La mano / La rodilla</li>
                <li>El tobillo / El pie</li>
            </ul>
        </div>
         <div>
            <strong className="text-red-700">Síntomas</strong>
            <ul className="text-xs text-gray-600 list-disc pl-3">
                <li>Tener fiebre / tos</li>
                <li>Tener gripe / náuseas</li>
                <li>Estar mareado / pálido</li>
                <li>Estar resfriado</li>
                <li>Doler (me duele...)</li>
            </ul>
        </div>
      </div>
    )
  },
  {
    id: 'u8-imperative',
    title: 'Imperativo (Consejos)',
    category: 'grammar',
    unit: '8',
    tags: ['imperative', 'grammar'],
    content: (
      <div className="space-y-2 text-sm">
         <p className="text-xs">Para dar consejos o instrucciones.</p>
         <table className="w-full text-xs border-collapse">
            <thead>
                <tr className="bg-blue-100">
                    <th className="p-1 text-left">Persona</th>
                    <th className="p-1 text-left">-AR (Comprar)</th>
                    <th className="p-1 text-left">-ER (Comer)</th>
                    <th className="p-1 text-left">-IR (Vivir)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="font-bold p-1">Tú</td>
                    <td className="p-1">Compr<span className="font-bold">a</span></td>
                    <td className="p-1">Com<span className="font-bold">e</span></td>
                    <td className="p-1">Viv<span className="font-bold">e</span></td>
                </tr>
                 <tr className="bg-gray-50">
                    <td className="font-bold p-1">Usted</td>
                    <td className="p-1">Compr<span className="font-bold">e</span></td>
                    <td className="p-1">Com<span className="font-bold">a</span></td>
                    <td className="p-1">Viv<span className="font-bold">a</span></td>
                </tr>
            </tbody>
         </table>
         <div className="text-xs bg-yellow-50 p-1 rounded mt-1">
            <strong>Irregulares (Tú):</strong> Ten, Pon, Sal, Haz, Di, Ve, Sé, Ven.
         </div>
      </div>
    )
  }
];

// --- EXAMPLE STORIES ---

export const EXAMPLES: ExampleStory[] = [
    {
        title: "Crimen en la Historia",
        headline: "Detienen por robo... a un gladiador romano",
        story: "Ayer, la policía detuvo a un hombre vestido de gladiador en el centro. El hombre gritaba: '¡Esto es Esparta!' mientras intentaba robar una panadería. Al final, resultó ser un actor que se había perdido. Cuando el policía le pidió el DNI, él le ofreció su espada.",
        grammarFocus: "Uso del Pretérito (detuvo, gritaba, resultó) mezclado con imperfecto para descripciones."
    },
    {
        title: "Salud Espacial",
        headline: "Llega a la base espacial... el dolor de muelas de mi vecino",
        story: "Parece imposible, pero ayer en la Estación Espacial Internacional hubo una emergencia. No fue un alienígena, sino que el astronauta jefe empezó a sentir un dolor terrible en la boca. Dijo: '¡Me duele la muela!'. Tuvieron que llamar a un dentista por Zoom para darle instrucciones: 'Tómate una pastilla y no comas azúcar'.",
        grammarFocus: "Vocabulario de salud (dolor, muela, tómate) en un contexto narrativo."
    },
    {
        title: "Amor Histórico",
        headline: "Pagan 1000 euros por cenar con... un rey que perdió su trono",
        story: "En una subasta muy extraña, un multimillonario pagó mil euros por cenar con un hombre que decía ser el antiguo Rey de un país olvidado. Durante la cena, el rey contó que perdió su trono por culpa de una partida de cartas.",
        grammarFocus: "Objetos indirectos y Pretérito Indefinido."
    }
];