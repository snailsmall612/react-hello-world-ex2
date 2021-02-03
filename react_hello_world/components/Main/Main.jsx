import React from "react"
import {Navbar} from "../Navbar"

class Main extends React.Component {
    render() {
        return (
            <Navbar bgTheme="navbar-theme-yellow" webSiteName="xxx公司"
                items={[
                    {href: '#', name: "首頁", active: "Y"}, 
                    {href: '#', name: "公司介紹", active: "N"},
                    {href: '#', name: "公司產品", active: "N"},
                    {href: '#', name: "聯絡我們", active: "N"}
                ]}
            />
        )
    }
}

export { Main }