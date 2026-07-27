import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-14-no-reset-server');
}

export default function ZuneraOt14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-14-no-reset-server" />;
}
