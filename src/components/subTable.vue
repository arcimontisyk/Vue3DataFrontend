 <template id="my-component">
  <v-data-table
    :headers="headers"
    :items="tasks"
    item-key="id"
    class="elevation-1"
    show-expand
  >
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        <v-data-table
          :headers="replyHeaders"
          :items="item.replies"
          item-key="id"
          class="elevation-0"
          hide-default-footer
        ></v-data-table>
      </td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "my-component",
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "Subject", value: "subject" },
        { text: "Assigned To", value: "assignedTo" },
        { text: "Date", value: "date" },
        { text: "Status", value: "status" },
      ],
      replyHeaders: [
        { text: "Title", value: "title" },
        { text: "Date", value: "date" },
      ],
      tasks: [
        {
          id: 123,
          subject: "Need to do something",
          assignedTo: "John B",
          date: "2020-02-01",
          status: "Active",
          replies: [
            { id: 1, title: "User request was submitted", date: "2020-02-01" },
            { id: 2, title: "Called User", date: "2020-02-01" },
            {
              id: 3,
              title: "User called back with details",
              date: "2020-02-02",
            },
            {
              id: 4,
              title: "Waiting on pc support to fix",
              date: "2020-02-03",
            },
          ],
        },
        {
          id: 223,
          subject: "Need to do something else",
          assignedTo: "Jason Q",
          date: "2020-02-04",
          status: "Closed",
          replies: [
            { id: 5, title: "User Email - Password Reset", date: "2020-02-04" },
            {
              id: 6,
              title: "Called user and reset password",
              date: "2020-02-04",
            },
          ],
        },
      ],
    };
  },
};
</script>




