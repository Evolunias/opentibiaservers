import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-tibia');
}

export default function ZuneraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-tibia" />;
}
