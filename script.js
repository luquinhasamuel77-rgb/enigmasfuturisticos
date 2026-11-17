const AREAS={
 ling:{n:"LINGUAGENS",i:"🗣️",t:"Você decifra o mundo pelas palavras.",
  d:"Você percebe sentidos escondidos, convence com facilidade e transforma ideias em histórias. Em 2089, quem sabe comunicar comanda a atenção — e a confiança — das pessoas.",
  j:["Roteirista de mundos virtuais","Tradutor de IA e idiomas","Jornalista e criador de conteúdo","Designer de conversas (UX writing)"],
  s:["Português e Literatura","Inglês e Espanhol","Artes e Redação"]},
 exa:{n:"EXATAS",i:"📐",t:"Você enxerga padrões onde outros veem caos.",
  d:"Lógica, precisão e raciocínio rápido são seu superpoder. Você gosta de resolver o que parece impossível com números, estratégia e método.",
  j:["Cientista de dados","Engenheiro de energia limpa","Analista financeiro quântico","Matemático de criptografia"],
  s:["Matemática","Física","Estatística e Lógica"]},
 nat:{n:"NATUREZA",i:"🧬",t:"Você quer entender como a vida e o planeta funcionam.",
  d:"Curioso e observador, você investiga causas, testa hipóteses e quer cuidar do que está vivo. O futuro vai precisar de quem salve pessoas, ecossistemas e recursos.",
  j:["Biotecnólogo e geneticista","Médico e pesquisador da saúde","Engenheiro ambiental","Químico de novos materiais"],
  s:["Biologia","Química","Ciências e Geografia física"]},
 hum:{n:"HUMANAS",i:"🌍",t:"Você entende pessoas, sociedades e o porquê das coisas.",
  d:"Você pensa no impacto humano de cada decisão e questiona o que é justo. Quando a tecnologia avança, alguém precisa guiá-la com ética, história e empatia.",
  j:["Especialista em ética de IA","Psicólogo do mundo digital","Advogado de direitos digitais","Urbanista de cidades inteligentes"],
  s:["História","Geografia humana","Sociologia e Filosofia"]},
 tec:{n:"TECNOLOGIA",i:"🤖",t:"Você nasceu para construir o amanhã.",
  d:"Você mistura criatividade e lógica para criar sistemas, robôs e apps. Gosta de mexer, testar, quebrar e refazer até funcionar — a mentalidade de quem inventa o futuro.",
  j:["Desenvolvedor de IA","Engenheiro de robótica","Especialista em cibersegurança","Criador de games e realidade virtual"],
  s:["Informática e Programação","Matemática aplicada","Eletrônica e Robótica"]}
};
const Q=[
 {t:"ARQUIVO 01 • A PORTA TRAVADA",s:"A porta do sistema central exibe uma mensagem estranha e um painel cheio de símbolos. Por onde você começa?",
  o:[["💬","Leio a mensagem e tento entender o que ela quer dizer","ling"],["🔢","Procuro um padrão numérico nos símbolos","exa"],["🔬","Analiso o material do painel e como ele reage","nat"],["🕰️","Pergunto quem construiu isso e por que","hum"],["💻","Tento invadir o painel e reprogramá-lo","tec"]]},
 {t:"ARQUIVO 02 • A CIDADE SEM ENERGIA",s:"A cidade de 2089 está no escuro. Você tem 1 hora. Qual é a sua missão?",
  o:[["📣","Criar uma mensagem que acalme e organize a população","ling"],["⚡","Calcular a melhor forma de redistribuir a energia","exa"],["🌱","Descobrir uma fonte natural de energia renovável","nat"],["🤝","Reunir as pessoas e decidir juntos quem precisa primeiro","hum"],["🔧","Construir um gerador com as peças disponíveis","tec"]]},
 {t:"ARQUIVO 03 • O ROBÔ QUE FALA ESTRANHO",s:"Um robô diz coisas sem sentido. O que você faz?",
  o:[["🔤","Analiso como ele monta as frases até achar a lógica","ling"],["📊","Registro as respostas e busco a regra matemática","exa"],["🧠","Estudo como ele 'aprende' como se fosse um cérebro","nat"],["⚖️","Questiono se ele deveria ter direitos ou limites","hum"],["🛠️","Abro o código dele e corrijo o erro","tec"]]},
 {t:"ARQUIVO 04 • O LABORATÓRIO ABANDONADO",s:"Você encontra um laboratório com experimentos misteriosos. O que mais te chama atenção?",
  o:[["📖","O diário do cientista com sua história","ling"],["📐","As fórmulas e equações no quadro","exa"],["🧪","Os tubos de ensaio e organismos vivos","nat"],["🏛️","O impacto dessas pesquisas na sociedade","hum"],["🖥️","Os computadores e máquinas conectadas","tec"]]},
 {t:"ARQUIVO 05 • O PLANETA EM CRISE",s:"A humanidade precisa salvar um planeta. Qual seria seu papel ideal?",
  o:[["🎬","Contar a história para o mundo se mobilizar","ling"],["🧮","Planejar os recursos e rotas com precisão","exa"],["🌿","Recuperar o ambiente e a saúde das pessoas","nat"],["🗳️","Criar leis e acordos justos entre países","hum"],["🚀","Inventar a tecnologia que torna tudo possível","tec"]]},
 {t:"ARQUIVO 06 • A ÚLTIMA SENHA",s:"A IA oferece uma senha final: ela revela quem você é. Qual frase mais combina com você?",
  o:[["✍️","'Palavras mudam o mundo.'","ling"],["♾️","'Tudo tem uma lógica.'","exa"],["🔭","'Quero descobrir como tudo funciona.'","nat"],["❤️","'O futuro é sobre pessoas.'","hum"],["⚙️","'Se não existe, eu construo.'","tec"]]}
];
const $=id=>document.getElementById(id);
let cur=0,score;
function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));$(id).classList.add('active');window.scrollTo({top:0,behavior:'smooth'})}
function start(){cur=0;score={ling:0,exa:0,nat:0,hum:0,tec:0};show('game');render()}
function render(){
 const q=Q[cur];
 $('counter').textContent=`0${cur+1} / 0${Q.length}`;
 $('fill').style.width=(cur/Q.length*100)+'%';
 $('title').textContent=q.t;$('story').textContent=q.s;
 $('options').innerHTML='';
 q.o.forEach(([ic,tx,k])=>{
  const b=document.createElement('button');b.className='opt';
  b.innerHTML=`<span>${ic}</span>${tx}`;
  b.onclick=()=>{b.classList.add('pick');score[k]++;$('options').style.pointerEvents='none';
   setTimeout(()=>{cur++;cur<Q.length?(show('game'),render(),$('options').style.pointerEvents=''):analyze()},450)};
  $('options').appendChild(b);
 });
}
function analyze(){
 $('fill').style.width='100%';show('scan');
 const msgs=["Lendo padrões de raciocínio","Cruzando com 5 caminhos do futuro","Restaurando conexão..."];
 let i=0;const iv=setInterval(()=>{$('scanText').textContent=msgs[++i%msgs.length]},900);
 setTimeout(()=>{clearInterval(iv);result()},2800);
}
function result(){
 const rank=Object.entries(score).sort((a,b)=>b[1]-a[1]);
 const A=AREAS[rank[0][0]],B=AREAS[rank[1][0]];
 $('rIcon').textContent=A.i;$('rName').textContent=A.n;$('rTag').textContent=A.t;$('rDesc').textContent=A.d;
 $('rJobs').innerHTML=A.j.map(x=>`<li>${x}</li>`).join('');
 $('rSubs').innerHTML=A.s.map(x=>`<li>${x}</li>`).join('');
 $('chart').innerHTML=rank.map(([k,v])=>`<div class="row"><em>${AREAS[k].n}</em><div><i data-w="${v/Q.length*100}"></i></div><span>${Math.round(v/Q.length*100)}%</span></div>`).join('');
 $('rSecond').innerHTML=rank[1][1]>0?`Seu caminho secundário é <b>${B.n}</b> — combinar as duas áreas pode te levar a carreiras ainda mais raras.`:'';
 show('result');
 setTimeout(()=>document.querySelectorAll('#chart i').forEach(e=>e.style.width=e.dataset.w+'%'),200);
}
$('start').onclick=start;$('again').onclick=()=>show('intro');
/* fundo de partículas */
const c=$('bg'),x=c.getContext('2d');let P=[];
function size(){c.width=innerWidth;c.height=innerHeight;P=Array.from({length:Math.min(70,innerWidth/14)},()=>({x:Math.random()*c.width,y:Math.random()*c.height,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4}))}
function loop(){x.clearRect(0,0,c.width,c.height);
 P.forEach((p,i)=>{p.x=(p.x+p.vx+c.width)%c.width;p.y=(p.y+p.vy+c.height)%c.height;
  x.fillStyle='rgba(0,229,255,.7)';x.fillRect(p.x,p.y,2,2);
  for(let j=i+1;j<P.length;j++){const d=Math.hypot(p.x-P[j].x,p.y-P[j].y);
   if(d<110){x.strokeStyle=`rgba(163,91,255,${.25-d/500})`;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(P[j].x,P[j].y);x.stroke()}}});
 requestAnimationFrame(loop)}
addEventListener('resize',size);size();loop();