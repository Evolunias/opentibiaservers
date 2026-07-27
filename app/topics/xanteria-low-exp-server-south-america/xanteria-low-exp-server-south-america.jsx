import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-low-exp-server-south-america');
}

export default function XanteriaLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-low-exp-server-south-america" />;
}
