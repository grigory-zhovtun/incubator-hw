type AddressType = {
<<<<<<< HEAD
  street: any; // ПОДПРАВЛЯЕМ any
  city: any; // ПОДПРАВЛЯЕМ any
};

type UserType = {
  // ПРИДЕТСЯ САМОМУ)
};

type UserListPropsType = {
  users: UserType; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: 'ВСТАВЛЯЕМ ТИПИЗАЦИЮ') => {
=======
  street: string;
  city: string;
};

type UserType = {
  id: number,
  name: string,
  age: number,
  address: AddressType,
};

type UserListPropsType = {
  users: UserType[];
};

export const UserList = (props: UserListPropsType) => {
>>>>>>> 938b289 (fix changes)
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

<<<<<<< HEAD
      {/*<ul>*/}
      {/*  {props.users.map((user) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...*/}
      {/*    <li key={ЭЛЕМЕНТ МАССИВА.id} id={`hw01-user-${ЭЛЕМЕНТ МАССИВА.id}`}>*/}
      {/*      <strong>{ЭЛЕМЕНТ МАССИВА.name}</strong> (Age: {ЭЛЕМЕНТ МАССИВА.age})<strong> Address:</strong>*/}
      {/*      {ЭЛЕМЕНТ МАССИВА.address.street}, {ЭЛЕМЕНТ МАССИВА.address.city}*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
=======
      <ul>
        {props.users.map((user) => (
          <li key={user.id} id={`hw01-user-${user.id}`}>
            <strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>
            {user.address.street}, {user.address.city}
          </li>
        ))}
      </ul>
>>>>>>> 938b289 (fix changes)
    </div>
  );
};
