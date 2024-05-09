import React, {FC} from 'react';
import {UserBasicModel} from "../../models/basic-models/UserBasicModel";

interface IProps {
    user: UserBasicModel;
    choseUser: (id:number) => void;
}
const UserComponent: FC <IProps> = ({user,choseUser}) => {
    return (
        <div>
            <h4>ID: {user.id}</h4>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Maiden Name: {user.maidenName}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
            <p>Birth Date: {user.birthDate}</p>
            <p>Image: {user.image}</p>
            <p>Blood Group: {user.bloodGroup}</p>
            <p>Height: {user.height}</p>
            <p>Weight: {user.weight}</p>
            <p>Eye Color: {user.eyeColor}</p>
            <p>Hair Color: {user.hair.color}</p>
            <p>Hair Type: {user.hair.type}</p>
            <p>Domain: {user.domain}</p>
            <p>IP: {user.ip}</p>
            <p>Address: {user.address.address}</p>
            <p>City: {user.address.city}</p>
            <p>Latitude: {user.address.coordinates.lat}</p>
            <p>Longitude: {user.address.coordinates.lng}</p>
            <p>Postal Code: {user.address.postalCode}</p>
            <p>State: {user.address.state}</p>
            <p>MAC Address: {user.macAddress}</p>
            <p>University: {user.university}</p>
            <p>Card Expire: {user.bank.cardExpire}</p>
            <p>Card Number: {user.bank.cardNumber}</p>
            <p>Card Type: {user.bank.cardType}</p>
            <p>Currency: {user.bank.currency}</p>
            <p>IBAN: {user.bank.iban}</p>
            <p>Company Address: {user.company.address.address}</p>
            <p>Company City: {user.company.address.city}</p>
            <p>Company Latitude: {user.company.address.coordinates.lat}</p>
            <p>Company Longitude: {user.company.address.coordinates.lng}</p>
            <p>Company Postal Code: {user.company.address.postalCode}</p>
            <p>Company State: {user.company.address.state}</p>
            <p>Company Department: {user.company.department}</p>
            <p>Company Name: {user.company.name}</p>
            <p>Company Title: {user.company.title}</p>
            <p>EIN: {user.ein}</p>
            <p>SSN: {user.ssn}</p>
            <p>User Agent: {user.userAgent}</p>
            <span><button onClick={() => {
                choseUser(user.id);
            }}>show posts this user
            </button></span>
        </div>
    );
};

export default UserComponent;