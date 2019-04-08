import React, {Component} from 'react';
import  {Card , CardImg ,CardColumns, CardText , CardBody , CardTitle , CardSubTitle , Button}  from 'reactstrap';

//Author: Ram Date: 7/10/2018
//Employee card to show employee details(popup)
class ArticleItem extends Component {
  constructor(props){
    super(props);
    
  }
  componentDidMount(){
    
    this.props.onScroll();
  }
  render(){
    
    
    return (
              <div className="cardstyle">
              
              <Card style={{border:'solid 1px',borderRadius:'10px'}}>

              <CardBody>
              <div className="titleclass" style={{background:this.props.item.background}}><div style={{paddingLeft:'20px'}}>{this.props.item.Title}</div></div>
              <div className="video-list media">
                <div style={{float:'left',paddingLeft:'20px',paddingBottom : '20px'}}>
                  <img style={{float:'left',display:'flex',width: '140px',height: '140px'}} src={this.props.item.ThumbNail} />
                </div>
                <div className="media-body" style={{paddingLeft:'20px'}}>
                  <div className="media-heading" style={{padding:'5px'}}>
                  <h3>{this.props.item.SubTitle}</h3>
                  </div>
                  {this.props.item.TextContent.substring(0,200) + "..."}
                  <div className="editIcon" onClick={()=>this.props.onClick()}><span className="glyphicon glyphicon-pencil"></span></div>
                </div>
                
              </div>
              
              </CardBody>
              </Card>
              </div>
              
           );
  }
}

export default ArticleItem;
