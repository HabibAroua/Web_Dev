import React , {Component} from 'react';
import Cols from './compoments/Cols';

class App4 extends Component
{
    render()
    {
        return(
            <div>
                <table>
                    <tbody>
                       <tr>
                           <Cols />
                       </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App4;