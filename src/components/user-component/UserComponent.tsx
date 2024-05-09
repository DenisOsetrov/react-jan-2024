import React, {FC} from 'react';
import {UserBasicModel} from "../../models/basic-models/UserBasicModel";

interface IProps {
    user: UserBasicModel;
    choseUser: (id: number) => void;
}

const UserComponent: FC<IProps> = ({user, choseUser}) => {
    return (
        <div>
            <h4>ID: {user.id}</h4>
            <ul>
                <li>First Name: {user.firstName}</li>
                <li>Last Name: {user.lastName}</li>
                <li>Maiden Name: {user.maidenName}</li>
                <li>Age: {user.age}</li>
                <li>Gender: {user.gender}</li>
                <li>Email: {user.email}</li>
                <li>Phone: {user.phone}</li>
                <li>Username: {user.username}</li>
                <li>Password: {user.password}</li>
                <li>Birth Date: {user.birthDate}</li>
                <li>Image: <img src={user.image} alt={user.firstName}/></li>
                <li>Blood Group: {user.bloodGroup}</li>
                <li>Height: {user.height}</li>
                <li>Weight: {user.weight}</li>
                <li>Eye Color: {user.eyeColor}</li>
                <li>Hair Color: {user.hair.color}</li>
                <li>Hair Type: {user.hair.type}</li>
                <li>Domain: {user.domain}</li>
                <li>IP: {user.ip}</li>
                <li>Address: {user.address.address}</li>
                <li>City: {user.address.city}</li>
                <li>Latitude: {user.address.coordinates.lat}</li>
                <li>Longitude: {user.address.coordinates.lng}</li>
                <li>Postal Code: {user.address.postalCode}</li>
                <li>State: {user.address.state}</li>
                <li>MAC Address: {user.macAddress}</li>
                <li>University: {user.university}</li>
                <li>Card Expire: {user.bank.cardExpire}</li>
                <li>Card Number: {user.bank.cardNumber}</li>
                <li>Card Type: {user.bank.cardType}</li>
                <li>Currency: {user.bank.currency}</li>
                <li>IBAN: {user.bank.iban}</li>
                <li>Company Address: {user.company.address.address}</li>
                <li>Company City: {user.company.address.city}</li>
                <li>Company Latitude: {user.company.address.coordinates.lat}</li>
                <li>Company Longitude: {user.company.address.coordinates.lng}</li>
                <li>Company Postal Code: {user.company.address.postalCode}</li>
                <li>Company State: {user.company.address.state}</li>
                <li>Company Department: {user.company.department}</li>
                <li>Company Name: {user.company.name}</li>
                <li>Company Title: {user.company.title}</li>
                <li>EIN: {user.ein}</li>
                <li>SSN: {user.ssn}</li>
                <li>User Agent: {user.userAgent}</li>
                <span><button onClick={() => {
                    choseUser(user.id);
                }}>show posts this user
            </button></span>
            </ul>
        </div>
    );
};

export default UserComponent;