'use client';
import { CheckCircle } from '@mui/icons-material';
import { Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { customTheme } from '../Theme/theme';

const SectionTitle = ({ title }: { title: string }) => {
	const isMobile = useMediaQuery(customTheme.breakpoints.down('md'));
	return (
		<div className="flex gap-2 items-center">
			<CheckCircle color="success" fontSize="medium" />
			<Typography variant={isMobile ? 'h6' : 'h4'} color="textPrimary">
				{title}
			</Typography>
		</div>
	);
};

export default SectionTitle;
