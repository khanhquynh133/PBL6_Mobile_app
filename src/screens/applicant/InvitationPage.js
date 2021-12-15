import * as React from "react";
import invitations from "../../consts/invitations";
import NotificationComponent from "../../components/Applicant/NotificationComponent";
import { FlatList, SafeAreaView } from "react-native";
const InvitationPage = () => {
  return (
    <SafeAreaView>
      {invitations.map((item) => (
        <NotificationComponent invitation={item} />
      ))}
    </SafeAreaView>
  );
};

export default InvitationPage;
