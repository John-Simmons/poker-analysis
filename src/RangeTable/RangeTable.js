import React from 'react';
import RangeBtn from "../RangeBtn/RangeBtn"

const rangeTable = (props) => {
    return (
        <div className="RangeTable">
            <div className="row rt-content">
                <div className="col-sm" id="rt-col">
                    <RangeBtn>AA</RangeBtn>
                    <RangeBtn type="offsuit">AKo</RangeBtn>
                    <RangeBtn type="offsuit">AQo</RangeBtn>
                    <RangeBtn type="offsuit">AJo</RangeBtn>
                    <RangeBtn type="offsuit">ATo</RangeBtn>
                    <RangeBtn type="offsuit">A9o</RangeBtn>
                    <RangeBtn type="offsuit">A8o</RangeBtn>
                    <RangeBtn type="offsuit">A7o</RangeBtn>
                    <RangeBtn type="offsuit">A6o</RangeBtn>
                    <RangeBtn type="offsuit">A5o</RangeBtn>
                    <RangeBtn type="offsuit">A4o</RangeBtn>
                    <RangeBtn type="offsuit">A3o</RangeBtn>
                    <RangeBtn type="offsuit">A2o</RangeBtn>
                </div>
                <div className="col-sm" id="rt-col">
                    <RangeBtn type="suited">AKs</RangeBtn>
                    <RangeBtn>KK</RangeBtn>
                    <RangeBtn type="offsuit">KQo</RangeBtn>
                    <RangeBtn type="offsuit">KJo</RangeBtn>
                    <RangeBtn type="offsuit">KTo</RangeBtn>
                    <RangeBtn type="offsuit">K9o</RangeBtn>
                    <RangeBtn type="offsuit">K8o</RangeBtn>
                    <RangeBtn type="offsuit">K7o</RangeBtn>
                    <RangeBtn type="offsuit">K6o</RangeBtn>
                    <RangeBtn type="offsuit">K5o</RangeBtn>
                    <RangeBtn type="offsuit">K4o</RangeBtn>
                    <RangeBtn type="offsuit">K3o</RangeBtn>
                    <RangeBtn type="offsuit">K2o</RangeBtn>
                </div>
                <div className="col-sm" id="rt-col">
                    <RangeBtn type="suited">AQs</RangeBtn>
                    <RangeBtn type="suited">KQs</RangeBtn>
                    <RangeBtn>QQ</RangeBtn>
                    <RangeBtn type="offsuit">QJo</RangeBtn>
                    <RangeBtn type="offsuit">QTo</RangeBtn>
                    <RangeBtn type="offsuit">Q9o</RangeBtn>
                    <RangeBtn type="offsuit">Q8o</RangeBtn>
                    <RangeBtn type="offsuit">Q7o</RangeBtn>
                    <RangeBtn type="offsuit">Q6o</RangeBtn>
                    <RangeBtn type="offsuit">Q5o</RangeBtn>
                    <RangeBtn type="offsuit">Q4o</RangeBtn>
                    <RangeBtn type="offsuit">Q3o</RangeBtn>
                    <RangeBtn type="offsuit">Q2o</RangeBtn>
                </div>
                <div className="col-sm" id="rt-col">
                    <RangeBtn type="suited">AJs</RangeBtn>
                    <RangeBtn type="suited">KJs</RangeBtn>
                    <RangeBtn type="suited">QJs</RangeBtn>
                    <RangeBtn>JJ</RangeBtn>
                    <RangeBtn type="offsuit">JTo</RangeBtn>
                    <RangeBtn type="offsuit">J9o</RangeBtn>
                    <RangeBtn type="offsuit">J8o</RangeBtn>
                    <RangeBtn type="offsuit">J7o</RangeBtn>
                    <RangeBtn type="offsuit">J6o</RangeBtn>
                    <RangeBtn type="offsuit">J5o</RangeBtn>
                    <RangeBtn type="offsuit">J4o</RangeBtn>
                    <RangeBtn type="offsuit">J3o</RangeBtn>
                    <RangeBtn type="offsuit">J2o</RangeBtn>
                </div>
                <div className="col-sm" id="rt-col">
                    <RangeBtn type="suited">ATs</RangeBtn>
                    <RangeBtn type="suited">KTs</RangeBtn>
                    <RangeBtn type="suited">QTs</RangeBtn>
                    <RangeBtn type="suited">JTs</RangeBtn>
                    <RangeBtn>TT</RangeBtn>
                    <RangeBtn type="offsuit">T9o</RangeBtn>
                    <RangeBtn type="offsuit">T8o</RangeBtn>
                    <RangeBtn type="offsuit">T7o</RangeBtn>
                    <RangeBtn type="offsuit">T6o</RangeBtn>
                    <RangeBtn type="offsuit">T5o</RangeBtn>
                    <RangeBtn type="offsuit">T4o</RangeBtn>
                    <RangeBtn type="offsuit">T3o</RangeBtn>
                    <RangeBtn type="offsuit">T2o</RangeBtn>
                </div>
                <div className="col-sm" id="rt-col">
                    <RangeBtn type="suited">A9s</RangeBtn>
                    <RangeBtn type="suited">K9s</RangeBtn>
                    <RangeBtn type="suited">Q9s</RangeBtn>
                    <RangeBtn type="suited">J9s</RangeBtn>
                    <RangeBtn type="suited">T9s</RangeBtn>
                    <RangeBtn>99</RangeBtn>
                    <RangeBtn type="offsuit">98o</RangeBtn>
                    <RangeBtn type="offsuit">97o</RangeBtn>
                    <RangeBtn type="offsuit">96o</RangeBtn>
                    <RangeBtn type="offsuit">95o</RangeBtn>
                    <RangeBtn type="offsuit">94o</RangeBtn>
                    <RangeBtn type="offsuit">93o</RangeBtn>
                    <RangeBtn type="offsuit">92o</RangeBtn>
                </div>
                <div className="col-sm" id="rt-col">
                    <RangeBtn type="suited">A8s</RangeBtn>
                    <RangeBtn type="suited">K8s</RangeBtn>
                    <RangeBtn type="suited">Q8s</RangeBtn>
                    <RangeBtn type="suited">J8s</RangeBtn>
                    <RangeBtn type="suited">T8s</RangeBtn>
                    <RangeBtn type="suited">98s</RangeBtn>
                    <RangeBtn>88</RangeBtn>
                    <RangeBtn type="offsuit">87o</RangeBtn>
                    <RangeBtn type="offsuit">86o</RangeBtn>
                    <RangeBtn type="offsuit">85o</RangeBtn>
                    <RangeBtn type="offsuit">84o</RangeBtn>
                    <RangeBtn type="offsuit">83o</RangeBtn>
                    <RangeBtn type="offsuit">82o</RangeBtn>
                </div>
                <div className="col-sm" id="rt-col">
                    <RangeBtn type="suited">A7s</RangeBtn>
                    <RangeBtn type="suited">K7s</RangeBtn>
                    <RangeBtn type="suited">Q7s</RangeBtn>
                    <RangeBtn type="suited">J7s</RangeBtn>
                    <RangeBtn type="suited">T7s</RangeBtn>
                    <RangeBtn type="suited">97s</RangeBtn>
                    <RangeBtn type="suited">87s</RangeBtn>
                    <RangeBtn>77</RangeBtn>
                    <RangeBtn type="offsuit">76o</RangeBtn>
                    <RangeBtn type="offsuit">75o</RangeBtn>
                    <RangeBtn type="offsuit">74o</RangeBtn>
                    <RangeBtn type="offsuit">73o</RangeBtn>
                    <RangeBtn type="offsuit">72o</RangeBtn>
                </div>
                <div className="col-sm" id="rt-col">
                    <RangeBtn type="suited">A6s</RangeBtn>
                    <RangeBtn type="suited">K6s</RangeBtn>
                    <RangeBtn type="suited">Q6s</RangeBtn>
                    <RangeBtn type="suited">J6s</RangeBtn>
                    <RangeBtn type="suited">T6s</RangeBtn>
                    <RangeBtn type="suited">96s</RangeBtn>
                    <RangeBtn type="suited">86s</RangeBtn>
                    <RangeBtn type="suited">76s</RangeBtn>
                    <RangeBtn>66</RangeBtn>
                    <RangeBtn type="offsuit">65o</RangeBtn>
                    <RangeBtn type="offsuit">64o</RangeBtn>
                    <RangeBtn type="offsuit">63o</RangeBtn>
                    <RangeBtn type="offsuit">62o</RangeBtn>
                </div>
                <div className="col-sm" id="rt-col">
                    <RangeBtn type="suited">A5s</RangeBtn>
                    <RangeBtn type="suited">K5s</RangeBtn>
                    <RangeBtn type="suited">Q5s</RangeBtn>
                    <RangeBtn type="suited">J5s</RangeBtn>
                    <RangeBtn type="suited">T5s</RangeBtn>
                    <RangeBtn type="suited">95s</RangeBtn>
                    <RangeBtn type="suited">85s</RangeBtn>
                    <RangeBtn type="suited">75s</RangeBtn>
                    <RangeBtn type="suited">65s</RangeBtn>
                    <RangeBtn>55</RangeBtn>
                    <RangeBtn type="offsuit">54o</RangeBtn>
                    <RangeBtn type="offsuit">53o</RangeBtn>
                    <RangeBtn type="offsuit">52o</RangeBtn>
                </div>
                <div className="col-sm" id="rt-col">
                    <RangeBtn type="suited">A4s</RangeBtn>
                    <RangeBtn type="suited">K4s</RangeBtn>
                    <RangeBtn type="suited">Q4s</RangeBtn>
                    <RangeBtn type="suited">J4s</RangeBtn>
                    <RangeBtn type="suited">T4s</RangeBtn>
                    <RangeBtn type="suited">94s</RangeBtn>
                    <RangeBtn type="suited">84s</RangeBtn>
                    <RangeBtn type="suited">74s</RangeBtn>
                    <RangeBtn type="suited">64s</RangeBtn>
                    <RangeBtn type="suited">54s</RangeBtn>
                    <RangeBtn>44</RangeBtn>
                    <RangeBtn type="offsuit">53o</RangeBtn>
                    <RangeBtn type="offsuit">52o</RangeBtn>
                </div>
                <div className="col-sm" id="rt-col">
                    <RangeBtn type="suited">A3s</RangeBtn>
                    <RangeBtn type="suited">K3s</RangeBtn>
                    <RangeBtn type="suited">Q3s</RangeBtn>
                    <RangeBtn type="suited">J3s</RangeBtn>
                    <RangeBtn type="suited">T3s</RangeBtn>
                    <RangeBtn type="suited">93s</RangeBtn>
                    <RangeBtn type="suited">83s</RangeBtn>
                    <RangeBtn type="suited">73s</RangeBtn>
                    <RangeBtn type="suited">63s</RangeBtn>
                    <RangeBtn type="suited">53s</RangeBtn>
                    <RangeBtn type="suited">43s</RangeBtn>
                    <RangeBtn>33</RangeBtn>
                    <RangeBtn type="offsuit">32o</RangeBtn>
                </div>
                <div className="col-sm" id="rt-col">
                    <RangeBtn type="suited">A2s</RangeBtn>
                    <RangeBtn type="suited">K2s</RangeBtn>
                    <RangeBtn type="suited">Q2s</RangeBtn>
                    <RangeBtn type="suited">J2s</RangeBtn>
                    <RangeBtn type="suited">T2s</RangeBtn>
                    <RangeBtn type="suited">92s</RangeBtn>
                    <RangeBtn type="suited">82s</RangeBtn>
                    <RangeBtn type="suited">72s</RangeBtn>
                    <RangeBtn type="suited">62s</RangeBtn>
                    <RangeBtn type="suited">52s</RangeBtn>
                    <RangeBtn type="suited">42s</RangeBtn>
                    <RangeBtn type="suited">32s</RangeBtn>
                    <RangeBtn>22</RangeBtn>
                </div>
            </div>
        </div>
    )
};

export default rangeTable;
