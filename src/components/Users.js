import React from "react"

class Users extends React.Component {
    users = [
        {
            id: 1,
            firstName: "Bob",
            lastName: "Marley",
            bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
            age: 40,
            isHappy: true
        },
        {
            id: 2,
            firstName: "John",
            lastName: "Doe",
            bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
            age: 22,
            isHappy: false
        },
    ]

    render() {
        if (this.users.length === 0) {
            return (
                <div className="user">
                    <h3>there are no users</h3>
                </div>
            )
        }
        else {
            return (
                <div>
                    {this.users.map((user) => (
                        <div className="user" key={user.id}>
                            <h3>{user.firstName} {user.lastName}</h3>
                            <p>{user.bio}</p>
                            <b>{user.isHappy ? 'User is happy' : 'User is sad'}</b>                            }
                        </div>
                    ))}
                </div>
            )
        }

    }

}

export default Users