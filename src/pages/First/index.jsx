import React, { useEffect, useState } from "react";
//import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

import { VictoryPie, VictoryBar,VictoryChart,VictoryStack,VictoryLabel,VictoryAxis } from "victory";
import { ArrowContainer, ArrowIcon, ArrowTitle, BgContainer, ColorIcon, GraphContainer, LegendContainer, QuestionContainer, TitleContainer, TitleDiv } from "./styles";

import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import TextTransition, { presets } from "react-text-transition";


function toPercentageTotal(num,total){
      const calc=(num/total*100)
      const percent=Math.round(calc)
      return `${percent}%`
    }

    


const empresas = [
  "Mexilhão",
  "Empresa 2",
  "Empresa 3",
  "Empresa 4"
];

//const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 500, pv: 2400, amt: 2400},{name: 'Page C', uv: 600, pv: 2400, amt: 2400},];

const dataQ1=[{
  empresa:empresas[0],
  resultados:[['Liderança Petrobras', '0' ,'18'], ['SMS', '0' ,'12'], ['Supervisão contratada/ Encarregado', '0' ,'12'], 
  ['Operação + Manutenção + Inspeção (BR)', '11' ,'51'],['Manutenção Contratada', '0' ,'53'], 
  ['Movimentação de Cargas', '1' ,'16'], ['Hotelaria', '1' ,'29'],[], ['Total', '13' ,'189']],
  causa:[['Liderança Petrobras', 9 ,8,1,7], ['SMS', 9,7,1,0], ['Supervisão contratada/ Encarregado', 7 ,2,4,1], 
  ['Operação + Manutenção + Inspeção (BR)', 33 ,27,2,0],['Manutenção Contratada', 27 ,11,6,8], 
  ['Movimentação de Cargas', 14 ,6,2,0], ['Hotelaria', 15 ,7,7,7],[], ['Total', 13 ,189,222,25]],
  
},
{
  empresa:empresas[1],
  resultados:[['Liderança Petrobras', '0' ,'18'], ['SMS', '0' ,'12'], ['Supervisão contratada/ Encarregado', '0' ,'12'], 
  ['Operação + Manutenção + Inspeção (BR)', '11' ,'51'],['Manutenção Contratada', '0' ,'53'], 
  ['Movimentação de Cargas', '1' ,'16'], ['Hotelaria', '15' ,'15'],[], ['Total', '27' ,'175']],
  causa:[['Liderança Petrobras', 9 ,8,1,0], ['SMS', 9,2,1,0], ['Supervisão contratada/ Encarregado', 6 ,4,3,1], 
  ['Operação + Manutenção + Inspeção (BR)', 33 ,27,2,0],['Manutenção Contratada', 27 ,11,7,8], 
  ['Movimentação de Cargas', 8 ,6,22,1], ['Hotelaria', 0 ,7,7,15],[], ['Total', 13 ,189,222,25]],
  

},
{
  empresa:empresas[2],
  resultados:[['Liderança Petrobras', '0' ,'18'], ['SMS', '0' ,'12'], ['Supervisão contratada/ Encarregado', '0' ,'12'], 
  ['Operação + Manutenção + Inspeção (BR)', '11' ,'51'],['Manutenção Contratada', '3' ,'50'], 
  ['Movimentação de Cargas', '1' ,'16'], ['Hotelaria', '1' ,'29'],[], ['Total', '16' ,'186']],
  causa:[['Liderança Petrobras', 9 ,8,1,0], ['SMS', 9,2,1,0], ['Supervisão contratada/ Encarregado', 6 ,2,1,1], 
  ['Operação + Manutenção + Inspeção (BR)', 33 ,27,2,0],['Manutenção Contratada', 27 ,11,6,8], 
  ['Movimentação de Cargas', 8 ,6,2,1], ['Hotelaria', 13 ,7,7,2],[], ['Total', 13 ,189,222,25]],
},
{
  empresa:empresas[3],
  resultados:[['Liderança Petrobras', '9' ,'9'], ['SMS', '0' ,'12'], ['Supervisão contratada/ Encarregado', '6' ,'6'], 
  ['Operação + Manutenção + Inspeção (BR)', '11' ,'51'],['Manutenção Contratada', '0' ,'53'], 
  ['Movimentação de Cargas', '1' ,'16'], ['Hotelaria', '1' ,'29'],[], ['Total', '28' ,'174']],
  causa:[['Liderança Petrobras', 9 ,4,1,4], ['SMS', 9,2,1,17], ['Supervisão contratada/ Encarregado', 6 ,2,4,25], 
  ['Operação + Manutenção + Inspeção (BR)', 33 ,27,2,0],['Manutenção Contratada', 27 ,11,6,8], 
  ['Movimentação de Cargas', 8 ,6,5,1], ['Hotelaria', 13 ,7,7,2],[], ['Total', 13 ,189,222,25]],
},
]


const transformData=(dataset) =>{
  const totals = dataset[0].map((data, i) => {
    return dataset.reduce((memo, curr) => {
      return memo + curr[i].y;
    }, 0);
  });
  return dataset.map((data) => {
    return data.map((datum, i) => {
      return { x: datum.x, y: (datum.y / totals[i]) * 100 };
    });
  });
}


export default function First(){
 
  const [title,setTitle]=useState(empresas[0]);
  const [question1,setQuestion1]=useState(dataQ1[0]);
  const [title2,setTitle2]=useState(empresas[0]);
  const [question2,setQuestion2]=useState(dataQ1[0]);
  
  const pie=[toPercentageTotal(dataQ1[0].resultados.slice(-1)[0][1],parseInt(dataQ1[0].resultados.slice(-1)[0][1])+parseInt(dataQ1[0].resultados.slice(-1)[0][2])),
  toPercentageTotal(dataQ1[0].resultados.slice(-1)[0][2],parseInt(dataQ1[0].resultados.slice(-1)[0][1])+parseInt(dataQ1[0].resultados.slice(-1)[0][2]))]

  
  const myDataset = [
    [
        { x: "a", y: question2.causa[0][1] },
        { x: "b", y: question2.causa[1][1] },
        { x: "c", y: question2.causa[2][1] },
        { x: "d", y: question2.causa[3][1] },
        { x: "e", y: question2.causa[4][1] },
        { x: "f", y: question2.causa[5][1] },
        { x: "g", y: question2.causa[6][1] },
        
    ],
    [
        { x: "a", y: question2.causa[0][2] },
        { x: "b", y: question2.causa[1][2] },
        { x: "c", y: question2.causa[2][2] },
        { x: "d", y: question2.causa[3][2] },
        { x: "e", y: question2.causa[4][2] },
        { x: "f", y: question2.causa[5][2] },
        { x: "g", y: question2.causa[6][2] },
    ],
    [
        { x: "a", y: question2.causa[0][3] },
        { x: "b", y: question2.causa[1][3] },
        { x: "c", y: question2.causa[2][3] },
        { x: "d", y: question2.causa[3][3] },
        { x: "e", y: question2.causa[4][3] },
        { x: "f", y: question2.causa[5][3] },
        { x: "g", y: question2.causa[6][3] },
    ],
    [
      { x: "a", y: question2.causa[0][4] },
      { x: "b", y: question2.causa[1][4] },
      { x: "c", y: question2.causa[2][4] },
      { x: "d", y: question2.causa[3][4] },
      { x: "e", y: question2.causa[4][4] },
      { x: "f", y: question2.causa[5][4] },
      { x: "g", y: question2.causa[6][4] },
  ],
  
  ];




  function goBack(word, array){
    const n=array.indexOf(word)
    if(n===0){
      return array[array.length-1]
    }
    else{
      return array[n-1]
    }
  }

  function goForward(word, array){
    const n=array.indexOf(word)
    if(n===array.length-1){
      return array[0]
    }
    else{
      return array[n+1]
    }
  }

    

    const pieData=[toPercentageTotal(13,202),toPercentageTotal(189,202)]
    //console.log(pieData)

    
    
    const testPie=[toPercentageTotal(dataQ1[0].resultados.slice(-1)[0][1],parseInt(dataQ1[0].resultados.slice(-1)[0][1])+parseInt(dataQ1[0].resultados.slice(-1)[0][2])),
    toPercentageTotal(dataQ1[0].resultados.slice(-1)[0][2],parseInt(dataQ1[0].resultados.slice(-1)[0][1])+parseInt(dataQ1[0].resultados.slice(-1)[0][2]))]
    const item=dataQ1[0].resultados.slice(-1)[0][1]+dataQ1[0].resultados.slice(-1)[0][2]
    //console.log(testPie)

    
function getInfo(list,info){
  const index = list.findIndex(x => x.empresa ===info);
    const filteredList = list.filter(function(i){ 
      const check=list.indexOf(i);
       return check === index;
   });
   
   return filteredList[0]
}
    
const string='Mais discordo que concordo'

useEffect(() => {
  setQuestion1(getInfo(dataQ1,title))
  //console.log(question1)
}, [title]);

useEffect(() => {
  setQuestion2(getInfo(dataQ1,title2))
  //console.log(question1)
}, [title2]);


const barLabelStyles = {
  fontSize: 14,
  fill: "black",
  textAnchor: "middle"
};
const CenteredLabel = (props) => {
  const { datum, scale } = props;
  const centerPos = scale.y((datum._y1 - datum._y0) / 2 + datum._y0);

  return (
    <VictoryLabel {...props} style={[barLabelStyles]} x={centerPos} dx={0} />
  );
};
const dataset = transformData(myDataset);

    return(
        <>
        



<BgContainer>
<TitleContainer>Você já sofreu algum acidente na plataforma?</TitleContainer>
<QuestionContainer>
    
    <Grid
      
      data={question1.resultados}
      columns={['Área', 'Sim', 'Não']}
      search={false}
      // pagination={{
      //   enabled: true,
      //   limit: 1,
      // }}
      //language='ptBR'
      style={{
        th:{
          backgroundColor: 'rgb(216,216,216)',
          //padding:'30px', paddingBottom:'30px',
          color:'black',
          borderBottom: '3px solid #ccc'
          },
        table:{
          border:"3px solid #ccc"
        }
      }}
    />
    <GraphContainer>
      <LegendContainer>
      <h3>Legenda</h3>
      <TitleDiv><ColorIcon color='#8CB5F8'/><p>Sim</p></TitleDiv>
      <TitleDiv><ColorIcon color='#F6B2AC'/><p>Não</p></TitleDiv>
      </LegendContainer>

  <VictoryPie
  animate={{
    duration: 1000,
    
  }}
  data={[
    { x: toPercentageTotal(question1.resultados.slice(-1)[0][2],parseInt(question1.resultados.slice(-1)[0][1])+parseInt(question1.resultados.slice(-1)[0][2])),
       y: parseInt(question1.resultados.slice(-1)[0][2]) },
    { x: toPercentageTotal(question1.resultados.slice(-1)[0][1],parseInt(question1.resultados.slice(-1)[0][1])+parseInt(question1.resultados.slice(-1)[0][2])), y: parseInt(question1.resultados.slice(-1)[0][1]) }
  ]}
  colorScale={['#F6B2AC','#8CB5F8']}
  labelPosition={'centroid'}
/>
</GraphContainer>
</QuestionContainer>
<ArrowContainer><ArrowIcon side='left' onClick={()=>setTitle(goBack(title,empresas))}/><ArrowTitle ><TextTransition
        text={ title }
        springConfig={ presets.wobbly }
      /></ArrowTitle><ArrowIcon onClick={()=>setTitle(goForward(title,empresas))}/></ArrowContainer>


</BgContainer>

<BgContainer>
  
  <TitleContainer>A principal causa dos acidentes de trabalho é o azar ou a fatalidade.</TitleContainer>
  <Grid
      
      data={question2.causa}
      columns={ [{
        name: "Área",
        width:'10%',
      }, {
        name: "Discordo fortemente",
        width:'10%',
      },{
        name: "Discordo mais que concordo",
        width:'10%',
        
      },
      {
        name: "Concordo mais que discordo",
        width:'10%',
      },
      {
        name: "Concordo fortemente",
        width:'10%',
      },
    ]}
      search={false}
      
      // pagination={{
      //   enabled: true,
      //   limit: 1,
      // }}
      //language='ptBR'
      style={{
        th:{
          backgroundColor: 'rgb(216,216,216)',
          //padding:'30px', paddingBottom:'30px',
          color:'black',
          borderBottom: '3px solid #ccc',
          
          },
        table:{
          border:"3px solid #ccc",
          textAlign:'center'
        },
        
      }}

    />

<GraphContainer>
  <LegendContainer>
        <h3>Legenda</h3>
        <TitleDiv><ColorIcon color='#00B050'/><p>Concordo fortemente</p></TitleDiv>
        <TitleDiv><ColorIcon color='#92D050'/><p>Concordo mais que discordo</p></TitleDiv>
        <TitleDiv><ColorIcon color='#FFC000'/><p>Discordo mais que concordo</p></TitleDiv>
        <TitleDiv><ColorIcon color='#FF5050'/><p>Discordo fortemente</p></TitleDiv>
        </LegendContainer>
        <VictoryChart height={400} 
            width={600}
            domainPadding={{ x: 20, y: 0 }}
            horizontal
            //padding={{ top: 20, bottom: 60 }}
            
          >
              <VictoryStack
              
                colorScale={["#FF5050", "#FFC000", "#92D050",'#00B050']}
              >
                {dataset.map((data, i) => {
                  
                  const percentage=(x)=>{
                      if(Math.round(x)!=0){
                        return Math.round(x)+"%"
                      }
                      else{
                        return null
                      }
                  }
                  
                  return <VictoryBar 
                  labelComponent={<CenteredLabel />}
                  barWidth={20}
                  labels={({ datum }) => percentage(datum.y)}
                  
                  style={{ labels: { fill: "black",fontSize:'14px',textAnchor:'middle'}}}
                  //labelComponent={<VictoryLabel dy={30}/>}
                  animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                  }}
                  data={data} key={i}/>;
                })}
              </VictoryStack>
              <VictoryAxis dependentAxis
                tickFormat={(tick) => `${tick}%`}
                style={{ tickLabels: { fontSize: 16 } }}
              
                
              />
              <VictoryAxis
                tickFormat={["", "", "", "", "",'','']}
                //style={{ tickLabels: { fontSize: 10 } }}
                height={200}
                
            />
          </VictoryChart>
        </GraphContainer>
        <ArrowContainer><ArrowIcon side='left' onClick={()=>setTitle2(goBack(title2,empresas))}/><ArrowTitle ><TextTransition
        text={ title2 }
        springConfig={ presets.wobbly }
        /></ArrowTitle><ArrowIcon onClick={()=>setTitle2(goForward(title2,empresas))}/></ArrowContainer>

</BgContainer>
  </>  
    )
}


/*
 <VictoryChart height={400} width={400}
          domainPadding={{ x: 30, y: 20 }}
          horizontal
        >
            <VictoryStack
              colorScale={["black", "blue", "tomato"]}
            >
              {dataset.map((data, i) => {
                return <VictoryBar data={data} key={i}/>;
              })}
            </VictoryStack>
            <VictoryAxis dependentAxis
              tickFormat={(tick) => `${tick}%`}
            />
            <VictoryAxis
              tickFormat={["Liderança Petrobras", "SMS", "Supervisão contratada", "Operação", "Manutenção contratada",'Movimentação de Cargas','Hotelaria']}
            />
        </VictoryChart>
*/




/*

<h1>TESTE GRAFICO</h1>
        <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>

        
    <VictoryChart domainPadding={25}>
    <VictoryBar
      categories={{
        x: ["birds", "cats", "dogs", "fish", "frogs"]
      }}
      data={[
        {x: "cats", y: 1},
        {x: "dogs", y: 2},
        {x: "birds", y: 3},
        {x: "fish", y: 2},
        {x: "frogs", y: 1}
      ]}
    />
  </VictoryChart> 





<Container>
  <VictoryChart 
  
  domainPadding={30} > 
  <VictoryStack horizontal={true}
  style={{
    data: { stroke: "black", strokeWidth: 0.5 }
  }}
>
  <VictoryBar categories={{
      x: ["SMS", "Supervisão Petrobras", 'Operação + Manutenção + Inspeção (BR)','Gerência+Coordenação','Total']}}
    style={{ data: { fill: "#e2473c" } }}
    data={[{x: "SMS", y: 11.1}, {x: "Supervisão Petrobras", y: 8.3}, {x: 'Operação + Manutenção + Inspeção (BR)', y: 5.7},
    {x: 'Gerência+Coordenação', y: 9.1},{x: 'Total', y: 7.8}]}
    animate={{
      duration: 2000,
      onLoad: { duration: 1000 }
    }}
    labels={['11.1%','8.3%','5.7%','9.1%','7.8%']}
    labelComponent={<VictoryLabel angle={-45} 
    />}
    
/>
  <VictoryBar
  style={{ data: { fill: "#f18842" } }}
    data={[{x: "SMS", y: 44.4}, {x: "Supervisão Petrobras", y: 25}, {x: 'Operação + Manutenção + Inspeção (BR)', y: 11.4}
  ,{x: 'Gerência+Coordenação', y: 27.3},{x: 'Total', y: 17.5}]} 
    animate={{
      duration: 2000,
      onLoad: { duration: 1000 }
    }}
    labels={['44.4%','25%','11.4%','27.3%','17.5%']}
    labelComponent={<VictoryLabel angle={-45} 
    />}
  />
  <VictoryBar
  style={{ data: { fill: "#3ace89" } }}
    data={[{x: "SMS", y: 22.2}, {x: "Supervisão Petrobras", y: 33.3}, {x: 'Operação + Manutenção + Inspeção (BR)', y: 44.3},
    {x: 'Gerência+Coordenação', y: 45.5},{x: 'Total', y: 40.8}]}
    animate={{
      duration: 2000,
      onLoad: { duration: 1000 }
    }}
    labels={['22.2%','33.3%','44.3%','45.5%','40.8%']}
    labelComponent={<VictoryLabel angle={-45} 
    />}
  />
  <VictoryBar
  style={{ data: { fill: "#13be03" } }}
    data={[{x: "SMS", y: 22.2}, {x: "Supervisão Petrobras", y: 33.3}, {x: 'Operação + Manutenção + Inspeção (BR)', y: 38.6},
    {x: 'Gerência+Coordenação', y: 18.2},{x: 'Total', y: 34}]}
    animate={{
      duration: 2000,
      onLoad: { duration: 1000 }
    }}
    labels={['22.2%','33.3%','38.6%','18.2%','34%']}
    labelComponent={<VictoryLabel angle={-45} 
    
    />}
  />
  
</VictoryStack>
</VictoryChart></Container>


*/