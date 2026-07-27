import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-0-no-reset-server');
}

export default function Xanteria80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-0-no-reset-server" />;
}
