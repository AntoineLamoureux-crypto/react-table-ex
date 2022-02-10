import React from 'react'
import jsonData from './data/data.json'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Container,
  Box
} from '@chakra-ui/react'

function jsonList() {
  return (
    <Box px={'200'}>
    <Box justifyContent='center'>
    <Table variant='simple' size={'lg'} px='10'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Phone</Th>
        <Th>Email</Th>
      </Tr>
    </Thead>
    <Tbody>
    {jsonData.map((item, i) => (
    <Tr key={i}>
        <Td>{item.name}</Td>
        <Td>{item.phone}</Td>
        <Td>{item.email}</Td>
    </Tr>
    ))}
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
  </Box>
  </Box>
  )
}

export default jsonList