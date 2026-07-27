import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-official');
}

export default function ZuneraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-official" />;
}
