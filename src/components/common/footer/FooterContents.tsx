import { Grid, GridItem } from '@chakra-ui/react';

import FooterCompany from './FooterCompany';
import FooterSupport from './FooterSupport';
import FooterBusiness from './FooterBusiness';
import FooterInformation from './FooterInformation';

export default function FooterContents() {
  return (
    <Grid
      templateColumns={{ base: '1fr', md: '1.8fr repeat(3, 1fr)' }}
      gap={{ base: '40px', lg: '48px' }}
      textAlign={{ base: 'center', md: 'left' }}
    >
      {/* information */}
      <GridItem display="flex" justifyContent={{ base: 'center', md: 'flex-start' }}>
        <FooterInformation />
      </GridItem>
      {/* service */}
      <GridItem display="flex" justifyContent={{ base: 'center', md: 'flex-start' }}>
        <FooterBusiness />
      </GridItem>
      {/* company */}
      <GridItem display="flex" justifyContent={{ base: 'center', md: 'flex-start' }}>
        <FooterCompany />
      </GridItem>
      {/* support */}
      <GridItem display="flex" justifyContent={{ base: 'center', md: 'flex-start' }}>
        <FooterSupport />
      </GridItem>
    </Grid>
  );
}