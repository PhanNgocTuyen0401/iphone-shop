import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
        }}
        >
            <NavLink to='/'>
                <p>Home</p>
            </NavLink>
            <NavLink to='about'>
                <p>About</p>
            </NavLink>
            <NavLink to='products'>
                <p>Products</p>
            </NavLink>
            {/* <a href="https://courses.duytan.edu.vn/Sites/Home_ChuongTrinhDaoTao.aspx?p=home_listcoursedetail&courseid=2316&timespan=89&t=s">hihi</a> */}
        </div>
    )
}

export default Navbar;