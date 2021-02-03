import React from "react"

class Navbar extends React.Component {
    render() {
        return (
            <nav className={`navbar navbar-default ${this.props.bgTheme}`}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">{this.props.webSiteName}</a>
                    </div>
                    <ul className="nav navbar-nav">
                        {this.props.items.map((item, i) => {      
                            if(item.active == 'Y'){
                                return (
                                    <li className="active">
                                        <a href={item.href}>{item.name}</a>
                                    </li>
                                )
                            }
                            else{
                                return (
                                    <li>
                                        <a href={item.href}>{item.name}</a>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
            </nav>
        )
    }
}

export { Navbar }