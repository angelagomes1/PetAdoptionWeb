import "./sidebar.css" 
import { Link } from "react-router-dom";
import { AttachMoney, BarChart, LineStyle, PermIdentity, Storefront} from "@mui/icons-material";
export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon"/>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                    <Link to="/users" className="link">
                      <li className="sidebarListItem">
                             <PermIdentity className="sidebarIcon" />
                               Users
                                </li>
                             </Link>
                      <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <Storefront className="sidebarIcon"/>
                                Products
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon"/>
                            Transcation
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}