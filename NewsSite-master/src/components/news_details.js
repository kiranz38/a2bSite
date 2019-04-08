import React,{Component} from 'react';
import ReactDOM from 'react-dom';


const NewsCategoryCard = (props) => (
	<div style={{ position: 'absolute', top: 0 }} onClick={()=>props.onClick(props.title)}>
		<header style={styles.cardHeader} className='card-header-details'>
        <ProfilePicture imgSrc={props.imgSrc} borderColor={props.background} />
		<div className="category">
		
		<h1 style={styles.headerName}>{props.title}</h1>
		<h3 style={styles.headerTitle} className='icon ion-ios-arrow-down'>{props.Stories.length} News</h3>
		</div>
			
				<div className="glyphicon glyphicon-plus"></div>
			
		</header>
        
		<div style={{color: '#fff',height:'200px'}} className= "detailsClass">
		        {props.Stories.map((newsitem, i) =>
				<DetailsRow key={i}
				icon='icon ion-ios-paper-outline'
				title={newsitem.AuthorName}
				summary={newsitem.TextContent.substring(0,50) + "..."}/>
			)}
	    
		</div>
  </div>
);



const ProfilePicture = ({ imgSrc, borderColor }) => (
	<img
		style={{
			width: '60px',
			height: '60px',
			borderRadius: '100%',
			border: `3px solid ${borderColor}`,
		}}
		src={imgSrc}
	/>
);
const DetailsRow = ({ icon, title, summary }) => {
	const renderSummary = () => {
		if (summary)	return (
			<p style={{ fontWeight: 300, lineHeight: 1.45 }}>
				{summary}
			</p>
		);
		return null;
	};

	return (
		<div style={styles.detailsRow.row}>
			<span
			className={`icon ${icon}`}
			style={{ ...styles.detailsRow.icon, alignSelf: 'flex-start' }}
			/>
			<div style={{ width: '80%' }}>
				<h2 style={styles.detailsRow.title}>
					{title}
				</h2>
				{renderSummary()}
			</div>
		</div>
	);
};
const styles = {
	cardHeader: {
		display: 'flex',
		height: '125px',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px 20px',
		color: '#fff',
	},
	headerName: {
		margin: 0,
		fontWeight: 500,
		fontSize: '25px',
		textAlign: 'right'
	},
	headerTitle: {
		margin: '4px 0 0',
		fontWeight: 300,
		fontSize: '17px',
		opacity: 0.8,
		textAlign: 'right'
	},
	detailsRow: {
		row: {
			width: '100%',
			padding: '0 20px',
			display: 'flex',
			alignItems: 'center',
            margin: '25px 0'
            
		},
		icon: {
			display: 'block',
			width: '25px',
			height: '30px',
			margin: '0 20px 0 0',
			borderBottom: '1px solid rgba(255, 255, 255, 0.8)',
			textAlign: 'center',
			fontSize: '22px',
		},
		title: {
			fontWeight: 500,
			fontSize: '20px',
			margin: 0,
			fontStyle: 'italic',
		},
	},
};

export default NewsCategoryCard;