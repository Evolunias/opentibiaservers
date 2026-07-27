import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-0-low-exp-server');
}

export default function Xanteria80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-0-low-exp-server" />;
}
