import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

//component import
import EachFounder from './EachFounder';
import SideScroll from '../../components/buttons/SideScroll';

//data import
import { FOUNDERS } from '../../data/founders';

class Founders extends Component {
	state = {
		card: 0,
	};

	componentDidMount() {
		this.setState({ isMounted: true });
	}

	onSideClick = reference => {
		if (this.state.card < FOUNDERS.length - 1 && reference === 'right') {
			this.setState(prevState => {
				return {
					card: prevState.card + 1,
				};
			});
		} else if (this.state.card > 0 && reference === 'left') {
			this.setState(prevState => {
				return {
					card: prevState.card - 1,
				};
			});
		}
	};

	render() {
		// const scrollDot = <div className={`scroll-icon`} />;

		return (
			<div ref={this.props.getRef} className="founders-section" id="founder">
				<div className="founders-left">
					<h1 className="founders-title">our leadership</h1>
					<div className="founders-cards">
						{FOUNDERS.map(founder => {
							return this.state.card === founder.id ? (
								<EachFounder key={founder.id} founder={founder} />
							) : null;
						})}
					</div>
					<div className="page-scroll-icon">
						{FOUNDERS.map(founder => {
							return founder.id === this.state.card ? (
								<div key={founder.id} className="scroll-founder on" />
							) : (
								<div key={founder.id} className="scroll-founder" />
							);
						})}
					</div>
				</div>
				<div className="founders-right">
					{FOUNDERS.map(founder => {
						return this.state.card === founder.id ? (
							<img
								key={founder.id}
								src={FOUNDERS[this.state.card].image}
								alt="founder image"
								className="founder__image"
							/>
						) : null;
					})}
				</div>

				<SideScroll title={'left'} click={() => this.onSideClick('left')} styleName={'left founder--scroll'} />
				<SideScroll
					title={'right'}
					click={() => this.onSideClick('right')}
					styleName={'right founder--scroll'}
				/>
			</div>
		);
	}
}

export default Founders;
