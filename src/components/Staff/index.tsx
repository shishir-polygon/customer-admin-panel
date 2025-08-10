import { FC, useState } from "react";

import { mockStaff } from "./data";
import IStaffProps from "./props";
import {
  AddWorkerButton,
  ListWrapper,
  StaffBlock,
  StaffList,
  StaffWrapper,
} from "./styles";
import { Modal, StaffBadge, Title, AddStaff } from "..";
import { IWorker } from "../../utils/types";

export const Staff: FC<IStaffProps> = () => {
  const [staff, setStaff] = useState(mockStaff);
  const [showModal, setShowModal] = useState(false);

  const { generalManager, managers, seniorWaiter, waiters } = staff;

  const onAddNewWorker = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);

  const onAddingNewStaff = (newStaff: IWorker) => {
    const position = staff[newStaff.position];
    setStaff({
      ...staff,
      [newStaff.position]: [...position, newStaff],
    });
    setShowModal(false);
  };

  const onRemoveWorker = (id: string, type: string) => {
    switch (type) {
      case "manager":
        setStaff({
          ...staff,
          managers: managers.filter((worker) => worker.id !== id),
        });
        break;
      case "senior":
        setStaff({
          ...staff,
          seniorWaiter: seniorWaiter.filter((worker) => worker.id !== id),
        });
        break;
      case "waiters":
        setStaff({
          ...staff,
          waiters: waiters.filter((worker) => worker.id !== id),
        });
        break;
      default:
        break;
    }
  };

  return (
    <StaffWrapper>
      <Modal showModal={showModal} onCloseModal={onCloseModal}>
        <AddStaff onSaveStaff={onAddingNewStaff} />
      </Modal>
      <Title text="Managers" fontSize={24} fontWeight="bold" />
      <StaffBlock withBorder>
        <Title text="General manager" fontSize={18} fontWeight="bold" />

        {/* general */}
        <StaffList justifyContent="space-between">
          <ListWrapper>
            {generalManager.map((worker) => (
              <StaffBadge
                onRemoveWorker={() => onRemoveWorker(worker.id, "general")}
                isGeneralManager
                key={worker.id}
                worker={worker}
              />
            ))}
          </ListWrapper>
          <AddWorkerButton onClick={onAddNewWorker} />
        </StaffList>
      </StaffBlock>

      <StaffBlock>
        <Title text="Manager" fontSize={18} fontWeight="bold" />

        {/* manager */}
        <StaffList>
          {managers.map((worker) => (
            <StaffBadge
              onRemoveWorker={() => onRemoveWorker(worker.id, "manager")}
              key={worker.id}
              worker={worker}
            />
          ))}
        </StaffList>
      </StaffBlock>

      <Title text="Waiters" fontSize={24} fontWeight="bold" />

      <StaffBlock withBorder>
        <Title text="Senior waiter" fontSize={18} fontWeight="bold" />

        {/* senoir waiter */}
        <StaffList justifyContent="space-between">
          <ListWrapper>
            {seniorWaiter.map((worker) => (
              <StaffBadge
                onRemoveWorker={() => onRemoveWorker(worker.id, "senior")}
                key={worker.id}
                worker={worker}
              />
            ))}
          </ListWrapper>
          <AddWorkerButton onClick={onAddNewWorker} />
        </StaffList>
      </StaffBlock>

      <StaffBlock withBorder>
        <Title text="Waiter" fontSize={18} fontWeight="bold" />

        {/* waiter */}
        <StaffList>
          {waiters.map((worker) => (
            <StaffBadge
              onRemoveWorker={() => onRemoveWorker(worker.id, "waiters")}
              key={worker.id}
              worker={worker}
            />
          ))}
        </StaffList>
      </StaffBlock>
    </StaffWrapper>
  );
};
