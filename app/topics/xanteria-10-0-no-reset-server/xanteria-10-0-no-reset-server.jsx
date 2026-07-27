import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-0-no-reset-server');
}

export default function Xanteria100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-0-no-reset-server" />;
}
