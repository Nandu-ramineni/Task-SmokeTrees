import Address from "../Models/Address.js";
import User from "../Models/User.js";


export const addUserAndAddress = async (req, res) => {
    const { name, street, city, country } = req.body;

    try {
        const user = new User({ name });
        await user.save();
        const address = new Address({
            street,
            city,
            country,
            user: user._id,
        });
        await address.save();
        user.addresses.push(address._id);
        await user.save();
        res.status(201).json({ message: 'User and Address created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};
