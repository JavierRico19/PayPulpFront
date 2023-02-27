import EditableField from "./EditableField";

const CustomerInfo = ({ register, errors, setFocus }) => {
  return (
    <div className="profile-costumer-info">
      <EditableField
        register={register}
        errors={errors}
        setFocus={setFocus}
        type="longText"
        name="address"
        label="Address:"
      />
      <EditableField
        register={register}
        errors={errors}
        setFocus={setFocus}
        type="shortText"
        name="city"
        label="City:"
      />
      <EditableField
        register={register}
        errors={errors}
        setFocus={setFocus}
        type="shortText"
        name="country"
        label="Country:"
      />
      <EditableField
        register={register}
        errors={errors}
        setFocus={setFocus}
        type="date"
        name="birthDate"
        label="Date of birth:"
      />
    </div>
  );
};

export default CustomerInfo;
