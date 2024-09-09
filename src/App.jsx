import {
  Alert,
  Button,
  Center,
  Container,
  Grid,
  Select,
  Space,
  Text,
  TextInput,
  Title,
  Group,
  Paper,
  Divider,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { IconInfoCircle } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import {useMutation} from "react-query";
import {fetchVacationFormAsPdf} from "./api.js";

const vacationTypes = [
  {
    label: "Növbəti məzuniyyət",
    value: "M",
  },
  {
    label: "Ödənişsiz məzuniyyət",
    value: "Ö",
  },
  {
    label: "Təhsil",
    value: "T",
  },
  {
    label: "Sosial",
    value: "S",
  },
];

export function App() {
  const { key, onSubmit, getInputProps } = useForm({
    method: "uncontrolled",
    initialValues: {
      "firstname": "Emil",
      "lastname": "Sultanov",
      "position": "senior frontend developer",
      "section": "frontend",
      "vacationType": "M",
      "vacationStartDate": new Date("2024-09-09T20:00:00.000Z"),
      "vacationEndDate": new Date("2024-09-16T20:00:00.000Z"),
      "workStartDate": new Date("2024-09-17T20:00:00.000Z"),
      "submissionDate": new Date("2024-09-09T20:00:00.000Z"),
      "hr": "Səidə Hüseynova",
      "substitutePerson": "Elcan Bayramov",
      "sectionHead": "Cavanshir Huseynov",
      "scrum": "Yashar Ismayilov",
      "po": "Naile Quliyeva"
    },
    validate: {
      firstname: (value) =>
        value.length > 0 ? null : "Ad xanası boş ola bilməz",
      lastname: (value) =>
        value.length > 0 ? null : "Soyad xanası boş ola bilməz",
      position: (value) =>
        value.length > 0 ? null : "Vəzifə xanası boş ola bilməz",
      section: (value) =>
        value.length > 0 ? null : "Şöbə xanası boş ola bilməz",
      vacationType: (value) =>
        value !== null ? null : "Məzuniyyətin növü xanası boş ola bilməz",
      vacationStartDate: (value) =>
        value !== null
          ? null
          : "Məzuniyyətin başlama tarixi xanası boş ola bilməz",
      vacationEndDate: (value) =>
        value !== null
          ? null
          : "Məzuniyyətin bitmə tarixi xanası boş ola bilməz",
      workStartDate: (value) =>
        value !== null ? null : "İşə başlanma tarixi xanası boş ola bilməz",
      substitutePerson: (value) =>
        value.length > 0 ? null : "Əvəz edən şəxs xanası boş ola bilməz",
      sectionHead: (value) =>
        value.length > 0 ? null : "Şöbə rəhbəri xanası boş ola bilməz",
    },
  });

  const {isLoading, mutate} = useMutation({
      mutationFn: fetchVacationFormAsPdf,
      onSuccess(response){
        console.log('response', response)
      }
  });

  const handleSuccess = (values, event) => {
    event.preventDefault();
    mutate(values);
  };

  const handleFailure = (errors, values, event) => {
    event.preventDefault();
  };

  return (
    <main>
      <Space h="xl" />
      <Container size={"lg"}>
        <Paper shadow="xl" p="xl" withBorder>
          <Center pb="xl">
            <Title order={3}>Məzuniyyət üçün müraciət ərizəsi</Title>
          </Center>
          <form onSubmit={onSubmit(handleSuccess, handleFailure)}>
            <Divider
              my="xs"
              mb="xs"
              label={
                <Text size={"md"} fw={500}>
                  Şəxsi məlumatlar
                </Text>
              }
              labelPosition="left"
            />
            <Grid>
              <Grid.Col span={{ base: 12, xs: 6, sm: 4 }}>
                <TextInput
                  withAsterisk
                  label="Ad"
                  placeholder="Adınızı daxil edin"
                  name={"firstname"}
                  key={key("firstname")}
                  {...getInputProps("firstname")}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, xs: 6, sm: 4 }}>
                <TextInput
                  withAsterisk
                  label="Soyad"
                  placeholder="Soyadınızı daxil edin"
                  name={"lastname"}
                  {...getInputProps("lastname")}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, xs: 6, sm: 4 }}>
                <TextInput
                  withAsterisk
                  label="Vəzifə"
                  placeholder="Vəzifənizi daxil edin"
                  name={"position"}
                  {...getInputProps("position")}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, xs: 6, sm: 4 }}>
                <TextInput
                  withAsterisk
                  label="Şöbə"
                  placeholder="Şöbə adını daxil edin"
                  name={"section"}
                  {...getInputProps("section")}
                />
              </Grid.Col>
            </Grid>
            <Space h="xl" />
            <Divider
              my="xs"
              mb={"xs"}
              label={
                <Text size={"md"} fw={500}>
                  Məzuniyyət məlumatları
                </Text>
              }
              labelPosition="left"
            />
            <Grid>
              <Grid.Col span={{ base: 12, xs: 6, sm: 4 }}>
                <Select
                  withAsterisk
                  label="Məzuniyyətin növü"
                  placeholder="Məzuniyyətin növünü seçin"
                  data={vacationTypes}
                  name={"vacationType"}
                  {...getInputProps("vacationType")}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, xs: 6, sm: 4 }}>
                <DatePickerInput
                  withAsterisk
                  label="Məzuniyyətin başlanma tarixi"
                  placeholder="Məzuniyyətin başlanma tarixini seçin"
                  name={"vacationStartDate"}
                  {...getInputProps("vacationStartDate")}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, xs: 6, sm: 4 }}>
                <DatePickerInput
                  withAsterisk
                  label="Məzuniyyətin bitmə tarixi"
                  placeholder="Məzuniyyətin bitmə tarixini seçin"
                  name={"vacationEndDate"}
                  {...getInputProps("vacationEndDate")}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, xs: 6, sm: 4 }}>
                <DatePickerInput
                  withAsterisk
                  label="İşə başlama tarixi"
                  placeholder="Tarix seçin"
                  name={"workStartDate"}
                  {...getInputProps("workStartDate")}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, xs: 6, sm: 4 }}>
                <DatePickerInput
                  clearable
                  label="Ərizənin doldurulma tarixi"
                  placeholder="Tarix seçin"
                  name={"submissionDate"}
                  {...getInputProps("submissionDate")}
                />
              </Grid.Col>
            </Grid>
            <Space h="xl" />
            <Divider
              my="xs"
              mb="xs"
              label={
                <Text size={"md"} fw={500}>
                  Razılaşdırma məlumatları
                </Text>
              }
              labelPosition="left"
            />
            <Grid>
              <Grid.Col span={{ base: 12, xs: 6, sm: 4 }}>
                <TextInput
                  label="İnsan resursları şöbəsi"
                  disabled
                  withAsterisk
                  name={"hr"}
                  {...getInputProps("hr")}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, xs: 6, sm: 4 }}>
                <TextInput
                  withAsterisk
                  label="Əvəz edən şəxs"
                  placeholder="Əvəz edən şəxsin adını daxil edin"
                  name={"substitutePerson"}
                  {...getInputProps("substitutePerson")}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, xs: 6, sm: 4 }}>
                <TextInput
                  withAsterisk
                  label="Şöbə rəhbəri"
                  placeholder="Şöbə rəhbərinin adını daxil edin"
                  name="sectionHead"
                  {...getInputProps("sectionHead")}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, xs: 6, sm: 4 }}>
                <TextInput
                  label="Agile layihə meneceri"
                  placeholder="Menecerin adını daxil edin"
                  name="scrum"
                  {...getInputProps("scrum")}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, xs: 6, sm: 4 }}>
                <TextInput
                  label="Məhsul sahibi"
                  placeholder="Məhsul sahibinin adını daxil edin"
                  name="po"
                  {...getInputProps("po")}
                />
              </Grid.Col>
            </Grid>
            <Space h="xl" />
            <Grid>
              <Grid.Col span={12}>
                <Alert variant="light" color="yellow" icon={<IconInfoCircle />}>
                  <Text>
                    Bu Ərizə məzuniyyətin başlanma tarixindən 6 iş günü - 2
                    həftə əvvəl təqdim olunmalıdır.
                  </Text>
                </Alert>
              </Grid.Col>
              <Grid.Col span={12}>
                <Group justify="flex-end" mt="md">
                  <Button variant="filled" type="submit" loading={isLoading}>
                    Göndər
                  </Button>
                </Group>
              </Grid.Col>
            </Grid>
          </form>
        </Paper>
      </Container>
      <Space h="xl" />
    </main>
  );
}