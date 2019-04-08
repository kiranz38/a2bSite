import React, {Component} from 'react';
import { CardStack, Card } from 'react-cardstack';
import NewsCategoryCard from '../components/news_details'
import perfectScroll from 'perfect-scrollbar';



class NewsCategory extends Component
{
    constructor(props) {
        super(props);
        
        // Initial state
        this.state = { open: false };
        
      }
    
      toggle() {
        this.setState({
          open: !this.state.open
        });
      }

    componentDidMount(){
      var ps =new perfectScroll('.detailsClass', {
        wheelSpeed: 1,
        wheelPropagation: true,
        minScrollbarLength: 10,
        scrollXMarginOffset:5,
        scrollYMarginOffset:5
        });
        ps.update();
    }
    componentDidUpdate(){
     
    }
      render() {
        
        return (
          <div style={{height:'400px'}}>
           
            <CardStack height={350} width={300} background="#f8f8f8" hoverOffset={25}>
              
                {this.props.news.map((newsitem, i) =>
                    
                    <Card height={200}
                        key={i}
                        background={newsitem.background}>
                        
                        <NewsCategoryCard onNew = {this.props.onNew} onClick={this.props.onCategoryClick} {...newsitem} />
                        
                    </Card>
                    
                )}
                
		    </CardStack>
        
          </div>

          
        );
      }
    
}

export default NewsCategory;