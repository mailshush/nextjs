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

  const filteredData = mockData.filter((item) => {
    return (
      (!query.category || item.category.toLowerCase().includes(query.category)) &&
      (!query.price || item.price <= parseInt(query.price)) &&
      (!query.brand || item.brand.toLowerCase().includes(query.brand))
    );
  });

  return (
    <>
      <Typography variant='h4' fontWeight={600} textAlign={'center'} mb={3}>
        検索機能
      </Typography>
      <Form action="./product">
        <Typography variant='h6' fontWeight={600} textAlign={'center'} mb={1}>
          絞り込み検索
        </Typography>
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

      <Typography variant='h4' fontWeight={600} textAlign={'center'} my={3}>
        検索結果 <small>{filteredData.length}件</small>
      </Typography>
      <Grid container spacing={2}>
        {filteredData.map((item) => (
          <Grid size={{ xs: 4 }} key={item.id}>
            <Card sx={{ p:2, border: '1px solid #ccc', boxShadow: 'none' }}>
              <Typography variant='h6' fontWeight={600} mb={0}>{item.name}</Typography>
              <Typography mt={1}>価格: ¥{item.price.toLocaleString()}</Typography>
              <Typography mt={1}>カテゴリー: {item.category}</Typography>
              <Typography mt={1}>ブランド: {item.brand}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
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
