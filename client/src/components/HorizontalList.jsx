import React from "react";
import "./HorizontalList.scss";

export class HorizontalList extends React.Component {
  constructor(props){
    super(props)
  }

  dressSelected = (evt, dress) => {
    console.log('dress selected', dress, this.props)
    this.props.data.setDress(dress)
  }

  render() {
    const imgDresses = [
      {dressId: 'SW287', designer: 'slate__willow', dressName: 'hunter_green_petal_dress'},
      {dressId: 'JS48', designer: 'jill_jill_stuart', dressName: 'powder_popover_gown'},
      {dressId: 'EJ121', designer: 'elizabeth_and_james', dressName: 'pink_kenna_dress'},
      {dressId: 'SLR15', designer: 'saylor', dressName: 'teal_rose_bush_lace_sheath'},
      {dressId: 'LP64', designer: 'lilly_pulitzer', dressName: 'navy_aveline_shift_dress'},
      {dressId: 'DJ7', designer: 'draper_james', dressName: 'floral_callaway_dress'},
      {dressId: 'ET26', designer: 'elie_tahari', dressName: 'nadia_dress'},
      ];

    return (
      <div>
        <div className="wrapper">
          <div className="scroll-container">
            <ul className="list-container">
              {
                imgDresses.map((dress, idx) => {
                  return <li key={idx}><img src={`./dist/${dress.dressId}.jpg`} alt=""
                                  onClick={(evt) => this.dressSelected(evt, dress)}/></li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}