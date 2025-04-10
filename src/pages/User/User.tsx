import { useParams } from 'react-router';
import { Header } from '../../components/Header/Header';
import { useGetUserQuery } from '../../store/api/api';

import { Title } from '../../components/Title/Title';
import { gifLoading } from '../../assets/gif';

import UserStyle from './User.module.scss';

const User = () => {
    const { pid } = useParams();
    const { data, isLoading } = useGetUserQuery(pid!);
    return (
        <>
            <Header />
            <section className="container">
                {isLoading && <img src={gifLoading} alt="" />}
                <main className={UserStyle.wrapper}>
                    <h2>{data?.username}</h2>
                    {data && (
                        <section className={UserStyle.description}>
                            <Title category={'Название'} text={data?.name} />
                            <Title category={'Email'} text={data?.email} />
                            <Title category={'Новер телефона'} text={data?.phone} />
                            <Title category={'Город'} text={data?.address.city} />
                            <Title category={'Lat'} text={data?.address.geo.lat} />
                            <Title category={'Lng'} text={data?.address.geo.lng} />
                            <Title category={'Улица'} text={data?.address.street} />
                            <Title category={'Люкс'} text={data?.address.suite} />
                            <Title category={'Почтовый индекс'} text={data?.address.zipcode} />
                            <Title category={'Веб сайт'} text={data?.website} />
                            <Title category={'Название компании'} text={data?.company.name} />
                            <Title category={'Bs'} text={data?.company.bs} />
                            <Title category={'Фраза компании'} text={data?.company.catchPhrase} />
                        </section>
                    )}
                </main>
            </section>
        </>
    );
};
export default User;
