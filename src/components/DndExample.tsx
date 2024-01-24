"use client";

import { cardsData } from "@/bin/CardsData";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Draggable, DropResult, Droppable } from "react-beautiful-dnd";
import LoadingSkeleton from "./LoadingSkeleton";
import { DndContext } from "@/context/DndContext";
interface Cards {
  id: number;
  title: string;
  components: {
    id: number;
    name: string;
  }[];
}
const DndExample = () => {
  const [data, setData] = useState<Cards[] | []>(cardsData);
  const [newItemName, setNewItemName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("TODO");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Find the category index
    const categoryIndex = data.findIndex((cat) => {
      if (selectedCategory == "TODO") {
        return cat.id === 0;
      } else if (selectedCategory == "INPROGRESS") {
        return cat.id === 1;
      } else {
        return cat.id === 2;
      }
    });
    if (categoryIndex === -1) return;

    // Incremental ID: Find the highest ID and add 1
    const newId = uuidv4();

    // Create a new item
    const newItem = {
      id: newId,
      name: newItemName,
    };

    // Clone the data array and add the new item
    const newData = [...data];
    newData[categoryIndex].components.push(newItem);

    // Update the state
    // setData(newData);

    // Reset the form fields
    setNewItemName("");
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId !== destination.droppableId) {
      const newData = [...JSON.parse(JSON.stringify(data))]; //shallow copy concept
      const oldDroppableIndex = newData.findIndex(
        (x) => x.id == source.droppableId.split("droppable")[1]
      );
      const newDroppableIndex = newData.findIndex(
        (x) => x.id == destination.droppableId.split("droppable")[1]
      );
      const [item] = newData[oldDroppableIndex].components.splice(
        source.index,
        1
      );
      newData[newDroppableIndex].components.splice(destination.index, 0, item);
      setData([...newData]);
    } else {
      const newData = [...JSON.parse(JSON.stringify(data))]; //shallow copy concept
      const droppableIndex = newData.findIndex(
        (x) => x.id == source.droppableId.split("droppable")[1]
      );
      const [item] = newData[droppableIndex].components.splice(source.index, 1);
      newData[droppableIndex].components.splice(destination.index, 0, item);
      setData([...newData]);
    }
  };
  
 useEffect(() => {
   const storedData = localStorage.getItem("drag_and_drop_data");
   console.log(storedData)
   if (storedData) {
    console.log("storred")
     setData(JSON.parse(storedData));
   } else {
    console.log("cards")
     setData(cardsData);
   }
 }, []);

 // Save data to local storage whenever it changes
 useEffect(() => {
   localStorage.setItem("drag_and_drop_data", JSON.stringify(data));
 }, [data]);
  if (!data.length) {
    return <LoadingSkeleton />;
  }
  return (
    <DndContext onDragEnd={onDragEnd}>
      <h1 className="text-center mt-8 mb-3 font-bold text-[25px] ">
        Drag and Drop Application
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex space-x-2 items-center w-full justify-center"
      >
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="New Item Name"
          className="flex-0 p-2 border border-gray-300 rounded text-black bg-white"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="flex-none p-2 border border-gray-300 rounded text-black bg-white"
          style={{ width: "150px" }}
        >
          <option value="TODO">TODO</option>
          <option value="INPROGRESS">INPROGRESS</option>
          <option value="DONE">DONE</option>
        </select>

        <button
          type="submit"
          className="flex-none bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Item
        </button>
      </form>
      <div className="flex gap-4 justify-between my-20 mx-4 flex-col lg:flex-row">
        {data.map((val, index) => {
          return (
            <Droppable key={index} droppableId={`droppable${index}`}>
              {(provided) => (
                <div
                  className="p-5 lg:w-1/3 w-full bg-gray-100  border-gray-400 border border-solid"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h2 className="text-center font-bold mb-6 text-black">
                    {val.title}
                  </h2>
                  {val.components?.map((component, index) => (
                    <Draggable
                      key={component.id}
                      draggableId={component.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="bg-gray-200 mx-1 px-4 py-3 my-3"
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          {component.name}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </DndContext>
  );
};

export default DndExample;
