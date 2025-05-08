"use client";

import { Flex, Form } from "antd";
import React, { useEffect, useState } from "react";
import Title from "antd/es/typography/Title";
import { creationForm } from "@/entities/create/constants";
import dynamic from "next/dynamic";
import { CreatePageButton } from "@/shared/Button";
import { FormGenerator } from "@/widgets";
import { HiddenContainer } from "@/shared";
import { callError } from "@/shared/utils";
import { useMeditationStore } from "@/processes/store";
import { useRouter } from "next/navigation";
import { LandingText, SimpleText } from "@/shared/Text";

//
const VoiceRecorder = dynamic(
  () => import("@/entities/create/components/VoiceRecorder"),
  {
    ssr: false,
    loading: () => <p>Загрузка модуля записи...</p>,
  }
);

const CreateMeditationPage = () => {
  const [form] = Form.useForm();
  const [currentVoice, setCurrentVoice] = useState<string | null>(null);
  const [blob, setBlob] = useState<null | Blob>(null);
  const updateMeditation = useMeditationStore(
    (state) => state.updateMeditation
  );
  const router = useRouter();

  const isHidden = !currentVoice || !["mine", "love"].includes(currentVoice);

  useEffect(() => {
    updateMeditation(false);
  }, []);

  function genetateMeditation() {
    form
      .validateFields()
      .then(() => {
        const hasNotVoice = !isHidden && !blob;
        if (hasNotVoice) {
          callError(
            "Запишите свой голос или выберите готовый вариант из предложенных"
          );
          return;
        }
        updateMeditation(true);
        router.push("/meditation");
      })
      .catch(() => {
        callError("Проверьте, что все поля заполнены");
      });
  }

  return (
    <Flex vertical gap={20} align="center">
      <Title level={2}>Создать медитацию</Title>

      <FormGenerator
        triggersNames={["voice"]}
        onChangeField={setCurrentVoice}
        isVertical
        creationForm={creationForm}
        form={form}
      />

      <HiddenContainer isHidden={isHidden}>
        <Flex vertical gap={15}>
          <LandingText>
            Текстовая инструкция. Запишите свой голос. Нужно 1 минуту. Можете
            говорить что-то свое или прочитать текст пример
          </LandingText>

          <SimpleText>
            Люди нюхают — запахло жареным! Нагнали каких-то. Блестящие! В
            касках! Нельзя сапожища! Скажите пожарным: на сердце горящее лезут в
            ласках. Я сам. Глаза наслезнённые бочками выкачу. Дайте о ребра
            опереться. Выскочу! Выскочу! Выскочу! Выскочу! Рухнули. Не выскочишь
            из сердца! На лице обгорающем из трещины губ обугленный поцелуишко
            броситься вырос. Мама! Петь не могу. У церковки сердца занимается
            клирос!
          </SimpleText>
          <VoiceRecorder updateBlob={setBlob} />
        </Flex>
      </HiddenContainer>
      <CreatePageButton onClick={genetateMeditation}>
        Включить медитацию
      </CreatePageButton>
    </Flex>
  );
};

export default CreateMeditationPage;
