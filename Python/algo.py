


class Node:
    def __init__(self, value):
        self.val = value
        self.next = None


class SLL:
    def __init__(self):
        self.head = None




    def addBack(self,value):
        new_node = Node(value)
        if self.head == None:
            self.head = new_node
        else:
            runner = self.head
            while runner.next != None:
                runner = runner.next
            runner.next = new_node
        return self
    def display_list(self):
        runner = self.head
        this_list = []
        while runner != None:
            this_list.append(runner.val)
            runner = runner.next
        print(this_list)
    def removeNeg(self):
        if self.head == None:
            return "Empty"
        while self.head.val < 0:
            self.head = self.head.next
        runner = self.head
        while runner.next != None:
            if runner.next.val < 0:
                runner.next = runner.next.next
            else: 
                runner = runner.next
        return self
    def move_to_front(self,value):
        if self.head == None: 
            return "Empty List"
        runner = self.head
        start = self.head
        while runner.next != None:
            if runner.next.val == value:
                move = runner.next
                runner.next = runner.next.next
                self.head = move
                move.next = start
            runner = runner.next
        return self
    def partition(self, pivot):
        if self.head == None:
            return "Empty list"
        runner = self.head
        while runner.next != None:
            if runner.next.val == pivot:
                self.move_to_front(runner.next.val)
            else:
                runner = runner.next
        runner = self.head
        while runner.next != None:
            if runner.next.val < pivot:
                self.move_to_front(runner.next.val)
            else:
                runner = runner.next
        return self





new_list = SLL()
new_list.addBack(5)
new_list.addBack(3)
new_list.addBack(2)
new_list.addBack(4)
new_list.addBack(5)
new_list.addBack(9)
new_list.addBack(-7)
new_list.addBack(8)


new_list.display_list()


new_list.partition(4)
new_list.display_list()


