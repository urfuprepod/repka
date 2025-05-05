"use client";

import { Flex, Form } from "antd";
import React from "react";
import Title from "antd/es/typography/Title";
import { creationForm } from "@/entities/create/constants";
import FormGrid from "@/widgets/FormGrid";
import { LandingText } from "@/shared/Text";
import dynamic from "next/dynamic";

const VoiceRecorder = dynamic(
  () => import("@/entities/create/components/VoiceRecorder"),
  {
    ssr: false,
    loading: () => <p>Загрузка модуля записи...</p>,
  }
);

const CreateMeditationPage = () => {
  const [form] = Form.useForm();

  return (
    <Flex vertical gap={20}>
      <Title level={2}>Создать медитацию</Title>
      <Form form={form}>
        {creationForm.map((item) => (
          <FormGrid key={item.name} isRequired itemsInLine={2} {...item} />
        ))}
        <LandingText>
          Текстовая инструкция. Запишите свой голос. Нужно 1 минуту. Можете
          говорить что-то свое или прочитать текст пример
        </LandingText>
        <VoiceRecorder />
      </Form>
    </Flex>
  );
};

export default CreateMeditationPage;
