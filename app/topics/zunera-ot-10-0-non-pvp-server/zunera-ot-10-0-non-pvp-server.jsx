import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-10-0-non-pvp-server');
}

export default function ZuneraOt100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-10-0-non-pvp-server" />;
}
