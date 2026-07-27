import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-8-0-no-reset-server');
}

export default function ZuneraOt80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-8-0-no-reset-server" />;
}
