import { IContact } from "../models/IContact";
import { useState, ChangeEvent, useEffect } from "react";
import useDebounce from "./useDebounceSearch";

const useContactSearch = (contacts: IContact[]) => {
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce(search);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  const searchUpdate = () => {
    const tmpFilterContacts = contacts.filter((contact) =>
      Object.entries(contact).some(
        ([key, value]) =>
          key !== "id" && String(value).toLowerCase().includes(debouncedValue)
      )
    );
    setFilteredContacts(tmpFilterContacts);
  };

  useEffect(() => {
    searchUpdate();
  }, [debouncedValue, contacts]);

  return { filteredContacts, onSearchChange };
};

export default useContactSearch;
