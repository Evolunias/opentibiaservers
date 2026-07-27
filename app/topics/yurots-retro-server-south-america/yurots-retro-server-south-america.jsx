import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-retro-server-south-america');
}

export default function YurotsRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-retro-server-south-america" />;
}
