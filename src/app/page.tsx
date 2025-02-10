'use client'
import * as React from 'react';
import { useState, useEffect, Suspense } from 'react';
import Form from 'next/form'
import { mockData } from "@/data/data";
import { useSearchParams } from "next/navigation";
import {
  TextField, FormControl, Box, Button, Typography , Card
} from '@mui/material';
import Grid from "@mui/material/Grid2";

function SearchComponent() {
  const searchParams = useSearchParams();
  
   // クエリ取得
   const query = {
    category: searchParams.get("category")?.toLowerCase() || "",
    price: searchParams.get("price") || "",
    brand: searchParams.get("brand")?.toLowerCase() || "",
  };

  // const filteredData = mockData.filter((item) => {
  //   return (
  //     (!query.category || item.category.toLowerCase().includes(query.category)) &&
  //     (!query.price || item.price <= parseInt(query.price)) &&
  //     (!query.brand || item.brand.toLowerCase().includes(query.brand))
  //   );
  // });

  return (
    <>
      <Typography variant='h4' fontWeight={600} textAlign={'center'} mb={3}>
        検索機能
      </Typography>
      <Form action="./product">
        <Box display={'flex'} gap={2} justifyContent={'center'}>
          <FormControl size="small">
            <TextField
              name="category"
              defaultValue={query.category}
              hiddenLabel
              fullWidth
              placeholder='カテゴリー'
              size="small"
              inputProps={{ type: 'text' }}
            />
          </FormControl>

          <FormControl size="small">
            <TextField
              name="price"
              defaultValue={query.price}
              hiddenLabel
              fullWidth
              placeholder='価格'
              size="small"
              inputProps={{ type: 'text' }}
            />
          </FormControl>

          <FormControl size="small">
            <TextField
              name="brand"
              defaultValue={query.brand}
              hiddenLabel
              fullWidth
              placeholder='ブランド'
              size="small"
              inputProps={{ type: 'text' }}
            />
          </FormControl>
        </Box>
        <Box mt={3} textAlign={'center'}>
          <Button type="submit" variant="contained" color="primary">
            検索
          </Button>
        </Box>
      </Form>

      
    </>
  );
}

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchComponent />
      </Suspense>
    </main>
  );
}
