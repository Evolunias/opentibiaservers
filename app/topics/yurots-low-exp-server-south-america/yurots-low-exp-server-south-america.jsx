import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-low-exp-server-south-america');
}

export default function YurotsLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-low-exp-server-south-america" />;
}
