import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-14-low-exp-server');
}

export default function Xanteria14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-14-low-exp-server" />;
}
