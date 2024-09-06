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

function App() {
  const { key, onSubmit, getInputProps } = useForm({
    method: "uncontrolled",
    initialValues: {
      firstName: "",
      lastName: "",
      position: "",
      branch: "",
      vacationType: null,
      vacationStartDate: null,
      vacationEndDate: null,
      workDateAfterVacation: null,
      applicationSubmitDate: null,
      hrDepartment: "Səidə Hüseynova",
      substitute: "",
      departmentHead: "",
      manager: "",
      productOwner: "",
    },
    validate: {
      firstName: (value) =>
        value.length > 0 ? null : "Ad xanası boş ola bilməz",
      lastName: (value) =>
        value.length > 0 ? null : "Soyad xanası boş ola bilməz",
      position: (value) =>
        value.length > 0 ? null : "Vəzifə xanası boş ola bilməz",
      branch: (value) =>
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
      workDateAfterVacation: (value) =>
        value !== null ? null : "İşə başlanma tarixi xanası boş ola bilməz",
      substitute: (value) =>
        value.length > 0 ? null : "Əvəz edən şəxs xanası boş ola bilməz",
      departmentHead: (value) =>
        value.length > 0 ? null : "Şöbə rəhbəri xanası boş ola bilməz",
    },
  });

  const handleSuccess = (values, event) => {
    event.preventDefault();
    console.log("values", values);
  };

  const handleFailure = (errors, values, event) => {
    event.preventDefault();
    console.error("Validation errors:", errors);
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
                  name={"firstName"}
                  key={key("firstName")}
                  {...getInputProps("firstName")}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, xs: 6, sm: 4 }}>
                <TextInput
                  withAsterisk
                  label="Soyad"
                  placeholder="Soyadınızı daxil edin"
                  name={"lastName"}
                  {...getInputProps("lastName")}
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
                  name={"branch"}
                  {...getInputProps("branch")}
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
                  name={"workDateAfterVacation"}
                  {...getInputProps("workDateAfterVacation")}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, xs: 6, sm: 4 }}>
                <DatePickerInput
                  clearable
                  label="Ərizənin doldurulma tarixi"
                  placeholder="Tarix seçin"
                  name={"applicationSubmitDate"}
                  {...getInputProps("applicationSubmitDate")}
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
                  name={"hrDepartment"}
                  {...getInputProps("hrDepartment")}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, xs: 6, sm: 4 }}>
                <TextInput
                  withAsterisk
                  label="Əvəz edən şəxs"
                  placeholder="Əvəz edən şəxsin adını daxil edin"
                  name={"substitute"}
                  {...getInputProps("substitute")}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, xs: 6, sm: 4 }}>
                <TextInput
                  withAsterisk
                  label="Şöbə rəhbəri"
                  placeholder="Şöbə rəhbərinin adını daxil edin"
                  name="departmentHead"
                  {...getInputProps("departmentHead")}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, xs: 6, sm: 4 }}>
                <TextInput
                  label="Agile layihə meneceri"
                  placeholder="Menecerin adını daxil edin"
                  name="manager"
                  {...getInputProps("manager")}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, xs: 6, sm: 4 }}>
                <TextInput
                  label="Məhsul sahibi"
                  placeholder="Məhsul sahibinin adını daxil edin"
                  name="productOwner"
                  {...getInputProps("productOwner")}
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
                  <Button variant="filled" type="submit">
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

export default App;
