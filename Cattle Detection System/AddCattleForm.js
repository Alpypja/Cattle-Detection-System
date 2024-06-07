import React from "react";

const AddCattleForm = () => {
    // Add your AddCattleForm logic here
    return (
        <div className="modal" id="addCattleModal">
            {/* Insert Add Cattle Form content here */}
            <h2>Add New Cattle</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="cattleName">Name:</label>
                    <input type="text" id="cattleName" name="cattleName" />
                </div>
                <div className="form-group">
                    <label htmlFor="cattleImage">Image:</label>
                    <input type="file" id="cattleImage" name="cattleImage" />
                </div>
                <button type="submit">Add Cattle</button>
            </form>
        </div>
    );
};

export default AddCattleForm;
