// ---------------------------this is one way of doing now check another 
//import React, { Component } from 'react'
// // import PropTypes from 'prop-types'
// import Newsitem from './Newsitem'
// export class News extends Component {
//   articles=[
//     {
//         "source": {
//             "id": "reuters",
//             "name": "Reuters"
//         },
//         "author": "Ahmed Kingimi",
//         "title": "Nigeria gunmen kill 50 in raid on northwest village, residents say",
//         "description": "At least 50 people were killed and an unspecified number kidnapped, including women and children, when gunmen attacked the village of Yargoje in northwest Nigeria at the weekend, residents said on Monday.",
//         "url": "https://www.reuters.com/world/africa/nigeria-gunmen-kill-50-raid-northwest-village-residents-say-2024-06-10/",
//         "urlToImage": "https://www.reuters.com/resizer/v2/FDVVHTPVWJDZ5JBUNE6YZPP6WE.png?auth=99e5784f8fa068f122a3addb257720bcb5efbe62fcaf972f0848ada96ce2466a&height=1005&width=1920&quality=80&smart=true",
//         "publishedAt": "2024-06-10T11:26:20Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "abc-news-au",
//             "name": "ABC News (AU)"
//         },
//         "author": "Emily Jane Smith",
//         "title": "Don't know much about the clitoris? The International Cliteratti will help",
//         "description": "Largely overlooked by medical science for centuries, these women set out to advance the knowledge of the clitoris.",
//         "url": "https://www.abc.net.au/news/2024-06-09/female-scientists-helping-people-discover-the-clitoris/103951640",
//         "urlToImage": "https://live-production.wcms.abc-cdn.net.au/2a537eaf2d65500a40d9d65d3f98fad9?impolicy=wcms_watermark_news&cropH=722&cropW=1283&xPos=10&yPos=0&width=862&height=485&imformat=generic",
//         "publishedAt": "2024-06-08T20:09:09Z",
//         "content": "Anita knows she has an uncommon profession. She regularly visits sex shops, talks to sex workers words like vulva, erection and orgasm are all part of a productive day on the job.\r\nWorking as an occu… [+5823 chars]"
//     },
//     {
//         "source": {
//             "id": "the-hill",
//             "name": "The Hill"
//         },
//         "author": "Alexander Bolton",
//         "title": "Race to replace McConnell heats up over response to Democratic ‘show’ votes",
//         "description": "The race to become next Senate Republican leader is heating up as GOP senators are divided over how to counter Senate Majority Leader Chuck Schumer’s (D-N.Y.) messaging offensive on women’s reproductive rights, a top issue in the 2024 election. The debate ove…",
//         "url": "https://thehill.com/homenews/senate/4708924-gop-leadership-race-mcconnell-show-votes/",
//         "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2024/06/thunejohn_cornynjohn_060624gn01_w.jpg?w=1280",
//         "publishedAt": "2024-06-07T09:30:00Z",
//         "content": "Skip to content\r\nThe race to become next Senate Republican leader is heating up as GOP senators are divided over how to counter Senate Majority Leader Chuck Schumer’s (D-N.Y.) messaging offensive on … [+8315 chars]"
//     },
//     {
//         "source": {
//             "id": "fox-sports",
//             "name": "Fox Sports"
//         },
//         "author": null,
//         "title": "Iowa standout Caitlin Clark declares for 2024 WNBA Draft",
//         "description": "Iowa star Caitlin Clark, who passed Lynette Woodard for the major-college women's basketball scoring mark Wednesday night, announced that she has declared for the 2024 WNBA Draft.",
//         "url": "http://www.foxsports.com/stories/womens-college-basketball/iowa-standout-caitlin-clark-declares-for-2024-wnba-draft",
//         "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/02/1408/814/CaitlinDraft.jpg?ve=1&tl=1",
//         "publishedAt": "2024-02-29T21:49:01Z",
//         "content": "Iowa star Caitlin Clark, the all-time leading scorer in major-women's college basketball history, has declared for the 2024 WNBA Draft, she announced in a social media post Thursday.\r\nClark is a seni… [+671 chars]"
//     },
//     {
//         "source": {
//             "id": "the-next-web",
//             "name": "The Next Web"
//         },
//         "author": "Sandra O Connell",
//         "title": "New pay transparency regulations could help women negotiate better salaries",
//         "description": "The EU’s new pay transparency directive won’t close the gender pay gap by itself. But it will help.\r\n\r\nAfter all, if you want to close the gender wage gap you first have to have ...",
//         "url": "http://thenextweb.com/news/new-pay-transparency-regulations-could-help-women-negotiate-better-salaries",
//         "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F06%2FAdd-a-heading-2-2.jpg&signature=a36f59f5a303e5a3a72bb0f4800c9e8d",
//         "publishedAt": "2023-06-21T07:49:33Z",
//         "content": "The EUs new pay transparency directive wont close the gender pay gap by itself. But it will help.\r\nAfter all, if you want to close the gender wage gap you first have to have data. Under the new direc… [+5348 chars]"
//     },
//     {
//         "source": {
//             "id": "the-globe-and-mail",
//             "name": "The Globe And Mail"
//         },
//         "author": "Molly Hayes, Elizabeth Renzetti, Tavia Grant",
//         "title": "Many women who suffer from intimate partner violence don’t trust the police. Why are they the default response?",
//         "description": "Fearing discrimination, revictimization or arrests that do more harm than good, women in Canada often stay silent about their abuse. Other jurisdictions are trying to remove police from the equation",
//         "url": "https://www.theglobeandmail.com/canada/article-intimate-partner-violence-police-response/",
//         "urlToImage": "https://www.theglobeandmail.com/resizer/h3D0ZHZzlxFB18W4eUcmyacIGmk=/1200x800/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/X4AS2XJHEVGLPICTE2LTJYPIIM.JPG",
//         "publishedAt": "2022-06-14T11:00:00Z",
//         "content": "Several times, Sue Caribou of Winnipeg would offer her couch to cousin Marie Morin when she needed a safe place away from her abusive boyfriend. He killed Ms. Morin two years ago and pleaded guilty t… [+11961 chars]"
//     },
//     {
//         "source": {
//             "id": "vice-news",
//             "name": "Vice News"
//         },
//         "author": "Carter Sherman",
//         "title": "Trump's FDA Won't Let Women Get Abortion Pills Remotely In a Pandemic. So The ACLU Is Suing.",
//         "description": "Pregnant people have make an in-person visit to pick up the pill — even if they've already seen a provider about getting an abortion.",
//         "url": "https://www.vice.com/en_us/article/935yq7/trumps-fda-wont-let-women-get-abortion-pills-remotely-in-a-pandemic-so-the-aclu-is-suing",
//         "urlToImage": "https://video-images.vice.com/test-uploads/articles/5eceae1504ee25009b133490/lede/1590603286527-AbortionPills.jpeg?crop=1xw:0.8425xh;0xw,0.1425xh&resize=1200:*",
//         "publishedAt": "2020-05-27T18:43:49Z",
//         "content": "As the coronavirus pandemic ground almost every U.S. industry to a standstill, the Trump administration urged healthcare professionals to use telemedicine to see patients remotely and stem the spread… [+4029 chars]"
//     }
// ]
//   constructor(){
//   super();
//   this.state={
//     articles:this.articles,
//     loading:true
//   }
//   }
//   render() {
//     return (
//       <div>
//       <h2 style={{textAlign:'center',marginTop:'30px'}}>NewsMonkey-Top Headlines</h2>
//       <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)'}}>
//          {/* display:'grid', gridTemplateColumns:'3',gridTemplateRows:'auto' */}
//           {this.state.articles.map((element)=>{
//                return <div className="newsshowing " >
//                 <Newsitem key={element.url} title={element.title.slice(0,50)} desc={element.description.slice(0,120)} imageurl={element.urlToImage} newsurl={element.url}  ></Newsitem>
//                 </div>
//           })}      
//       </div>
//       </div>
//     )
//   }
// }

// export default News;

// ======================================this code is with next and previous button without scroller and with loading at top 
// import React, { Component } from 'react'
// // import PropTypes from 'prop-types'
// import Newsitem from './Newsitem'
// import PropTypes from 'prop-types' 
// import Spinner from './Spinner.js' 
// export class News extends Component {
//   static defaultProps={
//     pagesize:5,
//     country:'in',
//     category:'general'
//   }
//   static propTypes={
//     country:PropTypes.string,
//     pagesize:PropTypes.number,
//     category:PropTypes.string
//   }
//   capitalize=(str)=>{
//      return str.charAt(0).toUpperCase()+str.slice(1)
//   }
//   constructor(props){
//   super(props);
//   this.state={
//     articles:[],
//     loading:true,
//     page:1,
//   }
//     document.title=`${this.capitalize(this.props.category)}-NewsMonkey`
// }

//   updatepage=async()=>{
//     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2663ed632c7f4b6a8d2f106b9b6d6c82&page=${this.state.page}&pageSize=${this.props.pagesize}`
//     this.setState({loading:true})
//     let data =await fetch(url);
//     let response= await data.json();
//     this.setState({
//     articles:response.articles,
//     page:this.state.page,
//     totalResults:response.totalResults,
//     loading:false
//     })}

//   async componentDidMount(){
//     // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2663ed632c7f4b6a8d2f106b9b6d6c82&pageSize=${this.props.pagesize}`
//     // let data =await fetch(url);
//     // let response= await data.json();
//     // this.setState({
//     //   articles:response.articles,
//     //   totalResults:response.totalResults
//     // })
//     this.updatepage();
    
//   }

//     handleprev=async()=>{
//       // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2663ed632c7f4b6a8d2f106b9b6d6c82&page=${this.state.page-1}&pageSize=${this.props.pagesize}`
//       // let data =await fetch(url);
//       // let response= await data.json();
//       // this.setState({
//       // articles:response.articles,
//       // page:this.state.page-1
//       // })
//       this.setState({
//         page:this.state.page-1
//       })
//       this.updatepage();
//     }
//     handlenext=async()=>{
//       // if(this.state.page<Math.ceil(this.state.totalResults/12)){
//       // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2663ed632c7f4b6a8d2f106b9b6d6c82&page=${this.state.page+1}&pageSize=${this.props.pagesize}`
//       // let data =await fetch(url);
//       // let response= await data.json();
//       // this.setState({
//       // articles:response.articles,
//       // page:this.state.page+1
//       // })}
//       // else{
//       //  let btn =document.querySelector(".myclass")
//       //   btn.disabled=true
//       // } 
//       if(this.state.page<Math.ceil(this.state.totalResults/12))
//         {
//           this.setState({
//             page:this.state.page+1
//           })
//           this.updatepage();
//         }
//         else{
//           let btn =document.querySelector(".myclass")
//           btn.disabled=true
//         }

//     } 
//   render() {
//     return (
//       <div style={{border:'solid grey 3px',margin:'30px',borderRadius:'10px'}}>
//       <h2 style={{textAlign:'center',margin:'30px'}}>NewsMonkey-Top {this.capitalize(this.props.category)} Headlines</h2>
//      { this.state.loading && <Spinner/>}
//       <div style={{ margin:'auto',width:'80%' }}>
//       <div  style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', justifyItems: 'center',alignItems:'center'}}>
//          {/* display:'grid', gridTemplateColumns:'3',gridTemplateRows:'auto' */}
//           {!this.state.loading && this.state.articles.map((element)=>{
//                return <div className="newsshowing " >
//                 <Newsitem key={element.url} title={element.title?element.title.slice(0,50):""} desc={element.description?element.description.slice(0,120):""} imageurl={element.url?element.urlToImage:"https://www.hindustantimes.com/ht-img/img/2024/06/10/550x309/US-HUNTER-BIDEN-GUN-TRIAL-CONTINUES-IN-DELAWARE-10_1718034063663_1718034099459.jpg"} newsurl={element.url} 
//                 author={element.author?element.author:"unknown"} time={element.publishedAt?(element.publishedAt):'unknown'} source={element.source.name} ></Newsitem>
//                 </div>
//           })}      
//       </div>
//       <div style={{display:'flex',justifyContent:'space-between',paddingLeft:'50px',paddingRight:'50px'}}>
//         <button disabled={this.state.page<=1} className="btn btn-primary my-4" onClick={this.handleprev} style={{padding:'10px',fontSize:'larger'}}>Previous</button>
//         <button className="btn btn-primary my-4 myclass" onClick={this.handlenext} style={{padding:'10px',paddingLeft:'18px',paddingRight:'18px',fontSize:'larger'}}>Next</button>
//       </div>
//       </div>
//       </div>
//     )
//   }
// }
// export default News;





/// ----------------with infinite scrolling bar and changes in loading gif
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types' 
import Spinner from './Spinner.js' 
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
  static defaultProps={
    pagesize:5,
    country:'in',
    category:'general',
    totalResults:0
  }
  static propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string
  }
  capitalize=(str)=>{
     return str.charAt(0).toUpperCase()+str.slice(1)
  }
  constructor(props){
  super(props);
  this.state={
    articles:[],
    loading:true,
    page:1,
  }
    document.title=`${this.capitalize(this.props.category)}-NewsMonkey`
}

  updatepage=async()=>{
    this.props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`
    this.setState({loading:true})
    let data =await fetch(url);
    this.props.setProgress(30);
    let response= await data.json();
    this.props.setProgress(70);   
    this.setState({
    articles:response.articles,
    page:this.state.page,
    totalResults:response.totalResults,
    loading:false
    })
    this.props.setProgress(100);
  }
  async componentDidMount(){
    // this.props.setProgress(30);
    this.updatepage();    
  }
  fetchMoreData=async()=>{
    this.props.setProgress(10);
    this.setState({page:this.state.page+1})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`
    // this.setState({loading:true})
    let data =await fetch(url);
    this.props.setProgress(30);
    let response= await data.json();
    this.props.setProgress(50);    
    this.setState({
    articles:this.state.articles.concat(response.articles),
    page:this.state.page,
    totalResults:response.totalResults
    })
    this.props.setProgress(100);
  }
    // handleprev=async()=>{
    //   // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2663ed632c7f4b6a8d2f106b9b6d6c82&page=${this.state.page-1}&pageSize=${this.props.pagesize}`
    //   // let data =await fetch(url);
    //   // let response= await data.json();
    //   // this.setState({
    //   // articles:response.articles,
    //   // page:this.state.page-1
    //   // })
    //   this.setState({
    //     page:this.state.page-1
    //   })
    //   this.updatepage();
    // }
    // handlenext=async()=>{
    //   // if(this.state.page<Math.ceil(this.state.totalResults/12)){
    //   // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2663ed632c7f4b6a8d2f106b9b6d6c82&page=${this.state.page+1}&pageSize=${this.props.pagesize}`
    //   // let data =await fetch(url);
    //   // let response= await data.json();
    //   // this.setState({
    //   // articles:response.articles,
    //   // page:this.state.page+1
    //   // })}
    //   // else{
    //   //  let btn =document.querySelector(".myclass")
    //   //   btn.disabled=true
    //   // } 
    //   if(this.state.page<Math.ceil(this.state.totalResults/12))
    //     {
    //       this.setState({
    //         page:this.state.page+1
    //       })
    //       this.updatepage();
    //     }
    //     else{
    //       let btn =document.querySelector(".myclass")
    //       btn.disabled=true
    //     }

    // } 
  render() {
    return (
      <>      
      
      {/* <div style={{border:'solid grey 3px',margin:'30px',borderRadius:'10px'}}> */}
      <div>
      <h2 style={{textAlign:'center',margin:'30px'}}>NewsMonkey-Top {this.capitalize(this.props.category)} Headlines</h2>
     {/* { this.state.loading && <Spinner/>} */}
     
      <div style={{ margin:'auto',width:'80%'}}>
      <div  style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', justifyItems: 'center',alignItems:'center'}}>
          {/* display:'grid', gridTemplateColumns:'3',gridTemplateRows:'auto' */}
          {this.state.articles && !this.state.loading && this.state.articles.map((element)=>{
                return <div className="newsshowing " >
                <Newsitem key={element.url} title={element.title?element.title.slice(0,50):""} desc={element.description?element.description.slice(0,120):""} imageurl={element.url?element.urlToImage:"https://www.hindustantimes.com/ht-img/img/2024/06/10/550x309/US-HUNTER-BIDEN-GUN-TRIAL-CONTINUES-IN-DELAWARE-10_1718034063663_1718034099459.jpg"} newsurl={element.url} 
                author={element.author?element.author:"unknown"} time={element.publishedAt?(element.publishedAt):'unknown'} source={element.source.name} ></Newsitem>
                </div>
          })}      
      </div>  
      </div>
      
      <InfiniteScroll
      dataLength={this.state.articles.length}
      next={this.fetchMoreData}
      hasMore={this.state.articles.length!=this.state.totalResults}                                                                                                                                                                                                                                                                    
      loader={<Spinner/>}
    />
    </div>
    </>

    )
  }
}
export default News;
