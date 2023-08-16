"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Profile = () => {
	const [user, setUser] = useState<string>('myProfile');

	const router = useRouter();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
	  event.preventDefault();
	  router.push(`/`);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUser(event.target.value);
	};

    return (
		<div>
			<p>{user}</p>

			<form onSubmit={handleSubmit}>
				<label>
					Update User:
					<input type="text" value={user} onChange={handleInputChange} />
				</label>
				<button type="submit">Update</button>
			</form>
		</div>
	)
}



export default Profile;
