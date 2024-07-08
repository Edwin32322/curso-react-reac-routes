import { Link, Routes, Route, useResolvedPath, useParams } from 'react-router-dom';
import { Error404 } from './Error404';

const Topic = () => {
    let { topic } = useParams();
    console.log(topic);
    return (
        <div>
            <h4>{topic}</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ea, sapiente dolorem ut ipsum fuga. Nisi sapiente nihil distinctio magni. Ipsum laudantium nisi ullam esse! Earum, reprehenderit. Id, aperiam provident.</p>
        </div>
    );
}

export const ReactTopics = () => {
    const resolvedPath = useResolvedPath("");
    const pathname = resolvedPath.pathname;
    console.log(pathname);

    return (
        <div>
            <h3>Temas de React</h3>
            <ul>
                <li>
                    <Link to={`${pathname}/jsx`}>JSX</Link>
                </li>
                <li>
                    <Link to={`${pathname}/props`}>PROPS</Link>
                </li>
                <li>
                    <Link to={`${pathname}/estados`}>ESTADOS</Link>
                </li>
                <li>
                    <Link to={`${pathname}/componentes`}>COMPONENTES</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<><h2>Elige un tema de React</h2></>} />
                <Route path=":topic" element={<Topic />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </div>
    );
};
