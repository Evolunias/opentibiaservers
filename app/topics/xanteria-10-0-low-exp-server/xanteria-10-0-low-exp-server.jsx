import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-0-low-exp-server');
}

export default function Xanteria100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-0-low-exp-server" />;
}
